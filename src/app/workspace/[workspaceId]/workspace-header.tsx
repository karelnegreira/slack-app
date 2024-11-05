
import { Button } from "@/components/ui/button";
import {
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


const WorkspaceHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 h-[49px] gap-0.5">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    </div>
  )
}

export default WorkspaceHeader