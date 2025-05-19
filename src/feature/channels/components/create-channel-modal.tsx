import { Button } from '@/components/ui/button';
import {
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

import { useCreateChannelModal } from '../store/use-create-channel-modal';

export const CreateChannelModal = () => {
    
    const [open, setOpen] = useCreateChannelModal();

    const [name, setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
        setName(value);
    }

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
                <form className="space-y-4">
                    <Input 
                        value={name}
                        disabled={false}
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