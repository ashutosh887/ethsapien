"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Sign In</h1>
      <p>Please connect your wallet to sign in.</p>
      <div style={{ marginTop: "1rem" }}>
        <ConnectButton />
      </div>
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
        onClick={() => signIn("credentials", { callbackUrl })}
      >
        Sign In
      </button>
    </div>
  );
}
