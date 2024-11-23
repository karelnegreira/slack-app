import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle
} from '@/components/ui/dialog';

export const useConfirm = (
    title: string, 
    message: string, 

): [any, any] => {
    const [promise, setPromise] = useState<{resolve: (value: boolean) => void} | null>(null);

    const confirm = () => new Promise((resolve) => {
        setPromise({ resolve });
    });
    
    const handleClose = () => {
        setPromise(null);
    }

    const handleConfirm = () => {
        promise?.resolve(true);
        handleClose();
    }

    const handleCancel = () => {
        promise?.resolve(false);
        handleClose();
    }

    const ConfirmDialog = () => {
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {message}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    }

    return ["", ""];
}