

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal"; 
import {toast} from 'sonner';
import { Input } from "@/components/ui/input";
import { Button  } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCreateWorkspace } from "../api/use-create-workspace";
import { useState } from "react";

  
  export const CreateWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal();
    const [name, setName] = useState("");
    const router = useRouter();

    const { mutate, isPending } = useCreateWorkspace();

    const handleClose = () => {
        setOpen(false);
        setName("");
        //TODO clear form
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate ({name}, {
            onSuccess(id) {
                toast.success("Workspace created");
                router.push(`/workspace/${id}`)
                handleClose();
            }
        })
        
    }; 

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a workspace</DialogTitle>
                </DialogHeader>
                <form  onSubmit={handleSubmit} className="space-y-4" >
                    <Input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        disabled={isPending} 
                        required
                        autoFocus
                        minLength={3}
                        placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
                />
                <div className="flex justify-end">
                    <Button disabled={isPending}>
                        Create
                    </Button>
                </div>
                </form>
            </DialogContent>
        </Dialog>
    )
  }