"use client";

import Loader from "@/components/custom/loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
  allowWhenAuthenticated?: boolean;
};

export default function ProtectionProvider({
  children,
  redirectTo = "/dashboard",
  allowWhenAuthenticated = false,
}: Props) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    } else if (
      status === "authenticated" &&
      !allowWhenAuthenticated &&
      redirectTo
    ) {
      router.push(redirectTo);
    }
  }, [status, router, redirectTo, allowWhenAuthenticated]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    return null;
  }

  return <>{children}</>;
}
