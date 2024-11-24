import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Link, LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

interface SidebarItemProps {
    label: string;
    id: string;
    icon: LucideIcon | IconType
}

export const SidebarItem = ({label, id, icon: Icon}: SidebarItemProps) => {
    
    const workspaceId = useWorkspaceId();

    return (
        <Button>
            <Link href={`/workspace/${workspaceId}/channel/${id}`}>
                <Icon />
                <span>{label}</span>
            </Link>
        </Button>
    )
}