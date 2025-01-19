"use client";

import { CreateWorkspaceModal } from "@/feature/workspaces/components/create-workspace-modal";
import { CreateChannelModal } from '@/feature/channels/components/create-channel-modal';

import { useEffect, useState } from "react";

export const Modals = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    return (
        <>
            <CreateChannelModal/>
            <CreateWorkspaceModal />
        </>
    )
}