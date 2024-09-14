"use client";

import { useGetworkspace } from "@/feature/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useParams } from "next/navigation";


const WorkspaceIdPage = () => {
    const workspaceId = useWorkspaceId();
    const {data} = useGetworkspace({id: workspaceId})

    return (
        <div>
            DATA: {JSON.stringify(data)}
        </div>
    );
}

export default WorkspaceIdPage;