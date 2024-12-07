import { ConnectButton } from "@rainbow-me/rainbowkit";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

interface SignInPageProps {
  callbackUrl: string;
}

export const getServerSideProps: GetServerSideProps<SignInPageProps> = async (
  context
) => {
  const session = await getSession(context);
  const callbackUrl = (context.query.callbackUrl as string) || "/dashboard";

  // Redirect if the user is already authenticated
  if (session) {
    return {
      redirect: {
        destination: callbackUrl,
        permanent: false,
      },
    };
  }

  return {
    props: {
      callbackUrl,
    },
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignInPage: React.FC<SignInPageProps> = ({ callbackUrl }) => {
  return (
    <div
      className="flex items-center justify-center bg-gray-100 dark:bg-gray-900"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
          Sign In to ETHSapien
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
          Please connect your wallet to sign in and access the dashboard.
        </p>
        <div className="w-full flex justify-center">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
