"use client";

import { useMemo, useEffect } from "react";
import {useRouter} from 'next/navigation';
import { Loader, TriangleAlert } from 'lucide-react';

import { useGetChannels } from "@/feature/channels/api/use-get-channels";
import { useCreateChannelModal } from "@/feature/channels/store/use-create-channel-modal";
import { useGetworkspace } from "@/feature/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";



const WorkspaceIdPage = () => {
    const router = useRouter();
    const workspaceId = useWorkspaceId();
    const [open, setOpen] = useCreateChannelModal();
    const { data: workspace, isLoading: workspaceLoading } = useGetworkspace({id: workspaceId});
    const {data: channels, isLoading: channelsLoading} = useGetChannels({
        workspaceId,
    });

    const channelId = useMemo(() => channels?.[0]?._id, [channels]);
    useEffect(() => {
        if (workspaceLoading || channelsLoading || !workspace) return;
        if (channelId) {
            router.push(`/workspace/${workspaceId}/channel/${channelId}`);
        } else if (!open) {
            setOpen(true);
        }
    }, [channelId, workspaceLoading, channelsLoading, workspace, open, setOpen, router, workspaceId])

    if (workspaceLoading || channelsLoading) {
        return (
            <div className="h-full flex-1 flex items-center justify-center flex-col gap-2">
                <Loader className="size-6 animate-spin text-muted-foreground" />
            </div>
        );
    }

    if (!workspace) {
        return (
            <div className="h-full flex-1 flex items-center justify-center flex-col gap-2">
                <TriangleAlert className="size-6 animate-spin text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                    Workspace not found
                </span>
            </div>
        );
    }

    return null;
};

export default WorkspaceIdPage;