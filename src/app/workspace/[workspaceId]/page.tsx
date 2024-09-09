"use client";

import { useWorkspaceId } from "@/hooks/use-workspace-id";

interface WorkspaceIdPageProps {
    params: {
        workspaceId: string;
    };
};

const WorkspaceIdPage = ({params}: WorkspaceIdPageProps) => {
    const workspaceId = useWorkspaceId();
    return (
        <div>
            ID: {workspaceId} 
        </div>
    );
}

export default WorkspaceIdPage;