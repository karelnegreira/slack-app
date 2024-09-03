import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"



export const useGetworkspaces = () => {
    const data = useQuery(api.workspaces.get);
    const isLoading = data === undefined;

    return { data, isLoading };
}