"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import { UserButton } from "@/feature/auth/components/user-button";
import { useGetworkspaces } from "@/feature/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/feature/workspaces/store/use-create-workspace-modal"; 

export default function Home() {

  const router = useRouter();

  const [open, setOpen] = useCreateWorkspaceModal();

  const {data, isLoading } = useGetworkspaces();

  const workspacesId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspacesId) {
      router.replace(`/workspace/${workspacesId}`)
      //console.log("Redirect to workspaces")
    } else if (!open) {
      setOpen(true);
    }
  }, [workspacesId, isLoading, open, setOpen, router]);
  
  return (
    <div>
      <UserButton />
    </div>
  );
}
