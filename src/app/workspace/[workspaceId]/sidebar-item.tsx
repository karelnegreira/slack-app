import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
0
import { cva, type VariantProps} from 'class-variance-authority';
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import  Link  from 'next/link';

const sidebarItemVariants = cva(
    "flex items-center gap-1.5 justify-center font-normal h-7 px-[18px] text-sm overflow-hidden", 
    {
        variants: {
            variant: {
                default: "text-[#9edffcc]", 
                active: "text-[#481349] bg-white/90 hover:bg-white/90", 
            }
        }
    }
)

interface SidebarItemProps {
    label: string;
    id: string;
    icon: LucideIcon | IconType;
    variant?: VariantProps<typeof sidebarItemVariants>["variant"]
}

export const SidebarItem = ({label, id, icon: Icon}: SidebarItemProps) => {

    const workspaceId = useWorkspaceId();

    return (
        <Button variant="transparent" size="sm" asChild>
            <Link href={`/workspace/${workspaceId}/channel/${id}`}>
                <Icon />
                <span>{label}</span>
            </Link>
        </Button>
    );
};