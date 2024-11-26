import { useCurrentMember } from "@/feature/members/api/use-current-member";
import { useGetworkspace } from "@/feature/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id"
import { AlertTriangle, HashIcon, Loader, MessageSquareText, SendHorizonal } from "lucide-react";
import WorkspaceHeader from "./workspace-header";
import { SidebarItem } from "./sidebar-item";
import { useGetChannels } from "@/feature/channels/api/use-get-channels";


const WorkspaceSidebar = () => {
    const workspaceId = useWorkspaceId();

    const {data: member, isLoading: memberLoading} = useCurrentMember({ workspaceId });
    const {data: workspace, isLoading: workspaceLoading} = useGetworkspace({ id: workspaceId });
    const {data: channels, isLoading: channelsLoading} = useGetChannels({workspaceId})

    if (workspaceLoading || memberLoading) {
        return (
            <div className="flex flex-col bg-[#5E2C5F] h-full items-center justify-center">
                <Loader className="size-5 animate-spin text-white"/>
            </div>
        );
    }

    if (!workspace || !member) {
        return (
            <div className="flex flex-col gap-y-2 bg-[#5E2C5F] h-full items-center justify-center">
                <AlertTriangle className="size-5 text-white"/>
                <p className="text-white text-sm">
                    Workspace not found
                </p>
            </div>
        );
    }

  return (
    <div className="flex flex-col bg-[#5E2C5F] h-full">
        <WorkspaceHeader workspace={workspace} isAdmin={member.role === 'admin'} />
        <div className="flex flex-col px-2 mt-3">
            <SidebarItem 
                label="Thread"
                icon={MessageSquareText}
                id="threads"
            />
            <SidebarItem 
                label="Draft and Sent"
                icon={SendHorizonal}
                id="drafts"
            />
            {
                channels?.map((item) => (
                    <SidebarItem
                        key={item._id}
                        icon={HashIcon}
                        label={item.name}
                        id={item._id}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default WorkspaceSidebar