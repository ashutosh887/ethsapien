import { GetServerSideProps } from "next";

interface ErrorPageProps {
  errorMessage: string;
}

const errorMessages: Record<string, string> = {
  Configuration: "There is a configuration issue. Please contact support.",
  AccessDenied: "Access was denied. Please check your permissions.",
  Verification: "The verification token is invalid or expired.",
  Default: "An unknown error occurred. Please try again.",
};

export const getServerSideProps: GetServerSideProps<ErrorPageProps> = async (
  context
) => {
  const error = (context.query.error as string) || "Default";

  return {
    props: {
      errorMessage: errorMessages[error] || errorMessages.Default,
    },
  };
};

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Authentication Error
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{errorMessage}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => window.location.replace("/auth/signin")}
        >
          Go to Sign In
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
