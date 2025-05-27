
import { Button } from '@/components/ui/button';
import {CopyIcon} from 'lucide-react';
import {toast} from 'sonner';

import {
    Dialog, 
    DialogClose, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle
} from '@/components/ui/dialog';
import { useWorkspaceId } from '@/hooks/use-workspace-id';

interface InviteModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    name: string;
    joinCode: string;
}

export const InviteModal = ({open, setOpen, name, joinCode}: InviteModalProps) => {

    const workspaceId = useWorkspaceId();

    const handleCopy = () => {
        const inviteLink = `${window.location.origin}/join/${workspaceId}`
        window.navigator.clipboard
        .writeText(inviteLink)
        .then(() => toast.success("Invite link copied to clipboard"));
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Invite user to {name}</DialogTitle>
                    <DialogDescription>
                        Use the code below to invite users to your workspace
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-y-4 items-center justify-center py-10">
                    <p className="flex flex-col gap-y-4 items-center justify-center py-10 uppercase">
                        {joinCode}
                    </p>
                    <Button onClick={handleCopy} variant="ghost" size="sm">
                        Copy link
                        <CopyIcon className="size-4 ml-2"/>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}