
import { Button } from '@/components/ui/button'
import { useGetworkspace } from '@/feature/workspaces/api/use-get-workspace'
import { useGetworkspaces } from '@/feature/workspaces/api/use-get-workspaces'
import { useWorkspaceId } from '@/hooks/use-workspace-id'

import {
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useCreateWorkspaceModal } from '@/feature/workspaces/store/use-create-workspace-modal'
import { Loader } from 'lucide-react'


export const WorkspacesSwitcher = () => {
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
                <DropdownMenuItem className="cursor-pointer flex-col justify-center items-start capitalize">
                    {workspace?.name}
                    <span>
                        Active workspace
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}