"use client";

import { UserButton } from "@/feature/auth/components/user-button";
import { useGetworkspaces } from "@/feature/workspaces/api/use-get-workspaces";
import { useEffect, useMemo } from "react";


export default function Home() {

  const {data, isLoading } = useGetworkspaces();

  const workspacesId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspacesId) {
      console.log("Redirect to workspaces")
    } else {
      console.log("Open creation model")
    }
  }, [workspacesId, isLoading]);
  
  return (
    <div>
      <UserButton />
    </div>
  );
}
