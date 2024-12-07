"use client";

import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessages: Record<string, string> = {
    Configuration: "There is a configuration issue. Please contact support.",
    AccessDenied: "Access was denied. Please check your permissions.",
    Verification: "The verification token is invalid or expired.",
    Default: "An unknown error occurred. Please try again.",
  };

  const message = errorMessages[error || "Default"];

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Authentication Error</h1>
      <p>{message}</p>
      <button
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0E76FD",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => window.location.replace("/auth/signin")}
      >
        Go to Sign In
      </button>
    </div>
  );
}
