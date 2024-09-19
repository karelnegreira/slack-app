
import { Button } from '@/components/ui/button'
import {
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const WorkspacesSwitcher = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl"> 
                    A
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}