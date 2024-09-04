"use client";

import { UserButton } from "@/feature/auth/components/user-button";
import { useCreateWorkspaceModal } from "@/feature/workspaces/store/use-create-workspace-modal";
import { useGetworkspaces } from "@/feature/workspaces/api/use-get-workspaces";
import { useEffect, useMemo } from "react";


export default function Home() {

  const [open, setOpen] = useCreateWorkspaceModal();

  const {data, isLoading } = useGetworkspaces();

  const workspacesId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspacesId) {
      console.log("Redirect to workspaces")
    } else if (!open) {
      setOpen(true);
    }
  }, [workspacesId, isLoading, open, setOpen]);
  
  return (
    <div>
      <UserButton />
    </div>
  );
}
