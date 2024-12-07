import { AuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Ethereum",
      credentials: {
        message: { label: "Message", type: "text" },
        signature: { label: "Signature", type: "text" },
      },
      authorize: async (credentials?: Record<string, string>) => {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const { message, signature } = credentials;

        try {
          const siwe = new SiweMessage(message);
          const result = await siwe.validate(signature);

          if (result) {
            return { id: siwe.address };
          }

          return null;
        } catch (error) {
          console.error("SIWE validation failed:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.user) {
        session.user = {
          ...session.user,
          ...token.user,
        };
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete session.user;
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: { id: string } }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  debug: process.env.NODE_ENV === "development",
};
