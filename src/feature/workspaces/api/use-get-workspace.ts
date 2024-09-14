import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel";

interface UseGetworkspaceProps {
    id: Id<"workspaces">;
}

export const useGetworkspace =  ({ id }: UseGetworkspaceProps) => {
    const data =  useQuery(api.workspaces.getById, { id });
    const isLoading = data === undefined;

    return { data, isLoading };
}