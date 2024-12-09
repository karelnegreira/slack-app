import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Id } from "../../../../convex/_generated/dataModel"
import { cva } from "class-variance-authority";

interface UserItemProps {
    id: Id<"users">;
    label?: string;
    image?: string;
    variant?: string;
}

const sidebarItemVariants = cva(
    "flex items-center gap-1.5 justify-start font-normal h-7 px-[18px] text-sm overflow-hidden", 
    {
        variants: {
            variant: {
                default: "text-[#f9edffcc]", 
                active: "text-[#481349] bg-white/90 hover:bg-white/90", 
            }, 
        }, 
        defaultVariants: {
            variant: 'default', 
        }, 
    }, 
);

export const UserItem = (
    {
        id, 
        label,
        image, 
        variant
    } : UserItemProps
) => {
    return (
        <Button>

        </Button>
    )
}