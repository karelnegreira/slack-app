"use client";

import { UserButton } from "@/feature/auth/components/user-button";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();
  
  return (
    <div>
      LOGGED IN
      <UserButton />
    </div>
  );
}
