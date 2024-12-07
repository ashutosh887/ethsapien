import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  // Pass authenticated session data to the page
  return {
    props: { session },
  };
}

export default function Dashboard({ session }) {
  return <h1>Authenticated as {session.user.email}</h1>;
}
