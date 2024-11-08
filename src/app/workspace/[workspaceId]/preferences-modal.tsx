
import {
    Dialog, 
    DialogContent, 
    DialogTrigger, 
    DialogHeader, 
    DialogTitle, 
    DialogClose, 
    DialogFooter, 
} from '@/components/ui/dialog';
import { useState } from 'react';

interface PreferenceModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    initialValue: string;
}

export const PreferencesModal = ({open, setOpen, initialValue} : PreferenceModalProps) => {
    const [value, setValue] = useState(initialValue);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 bg-gray-50 overflow-hidden">
                <DialogHeader className="p-4 border-b bg-white">
                    <DialogTitle>
                        {value}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold">
                                Workspace name
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}