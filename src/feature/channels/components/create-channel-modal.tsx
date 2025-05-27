import { Button } from '@/components/ui/button';
import {
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useWorkspaceId } from '@/hooks/use-workspace-id';
import React, { useState } from 'react';
import { useCreateChannel } from '../api/use-create-channel';

import { useCreateChannelModal } from '../store/use-create-channel-modal';

export const CreateChannelModal = () => {

    const workspaceId = useWorkspaceId();

    const { mutate, isPending } = useCreateChannel();
    
    const [open, setOpen] = useCreateChannelModal();

    const [name, setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
        setName(value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({
            name, workspaceId
        }, {
            onSuccess: (id) => {
                //TODO redirect to new channel
                handleClose();
            }, 
        }, 
        
        );
    };

    const handleClose = () => {
        setName("");
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Add a channel
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input 
                        value={name}
                        disabled={isPending}
                        onChange={handleChange}
                        required
                        autoFocus
                        minLength={3}
                        maxLength={30}
                        placeholder="e.g. plan-budget"
                    />
                    <div className="flex justify-end">
                        <Button disabled={false}>
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>

        </Dialog>
    )
}