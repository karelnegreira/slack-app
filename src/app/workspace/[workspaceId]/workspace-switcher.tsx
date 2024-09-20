
import { Button } from '@/components/ui/button'
import { useGetworkspace } from '@/feature/workspaces/api/use-get-workspace'
import { useGetworkspaces } from '@/feature/workspaces/api/use-get-workspaces'
import { useWorkspaceId } from '@/hooks/use-workspace-id'
import { useCreateWorkspaceModal } from '@/feature/workspaces/store/use-create-workspace-modal'
import {
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Loader, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'


export const WorkspacesSwitcher = () => {
    const router = useRouter();
    const workspaceId = useWorkspaceId();
    const [_open, setOpen] = useCreateWorkspaceModal();

    const {data: workspaces, isLoading: workspacesLoading} = useGetworkspaces();
    const {data: workspace, isLoading: workspaceLoading } = useGetworkspace({id: workspaceId});

    const filteredWorkspaces = workspaces?.filter( (workspace) => workspace?._id !== workspaceId);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl"> 
                    {workspaceLoading ? (
                        <Loader className="size-5 animate-spin shrink-0"/>
                    ) : (workspace?.name.charAt(0).toUpperCase())}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="start" className="w-64">
                <DropdownMenuItem 
                    onClick={() => router.push(`/workspace/${workspaceId}`)}
                    className="cursor-pointer flex-col justify-center items-start capitalize">
                    {workspace?.name}
                    <span className="text-xs text-muted-foreground">
                        Active workspace
                    </span>
                </DropdownMenuItem>
                {
                    filteredWorkspaces?.map((workspace) => (
                        <DropdownMenuItem
                            key={workspace._id}
                            className="cursor-pointer capitalize"
                            onClick={() => router.push(`/workspace/${workspace._id}`)}

                        >
                            
                        </DropdownMenuItem>
                    ))
                }
                <DropdownMenuItem>
                    <div className="size-9 relative overflow-hidden bg-[#f2f2f2] text-slate-800 font-semibold text-lg rounded-md flex items-center justify-center mr-2">
                        <Plus />
                    </div>
                    Create a new workspace
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}