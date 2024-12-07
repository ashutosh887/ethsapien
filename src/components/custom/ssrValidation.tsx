import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Dashboard({ session }: { session: any }) {
  return <h1>Authenticated as {session.user.email}</h1>;
}
