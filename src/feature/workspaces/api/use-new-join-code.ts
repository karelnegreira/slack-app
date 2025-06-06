import { useMutation } from "convex/react";

import { api } from "../../../../convex/_generated/api";
import { useCallback, useMemo, useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import Error from "next/error";

type RequestType = {workspaceId: Id<"workspaces">};
type ResponseType = Id<"workspaces"> | null;

type Options = {
    onSuccess?: (data: ResponseType) => void;
    onError?: (error: Error) => void;
    onSettled?: () => void;
    throwError?: boolean;
};

export const useNewJoinCode = () => {
    const [data, setData] = useState<ResponseType>(null);
    const [error, setError] = useState<Error | null>(null);

    const [status, setStatus] = useState<"success" | "error" | "settled" | "pending" | null>(null);

    //const [isPending, setIsPending] = useState(false);
    //const [isSuccess, setIsSuccess] = useState(false);
    //const [isError, setIsError] = useState(false);
    //const [isSettled, setIsSettled] = useState(false);

    const isPending = useMemo(() => status === "pending", [status]);
    const isSuccess = useMemo(() => status === 'success', [status]);
    const isError = useMemo(() => status === 'error', [status]);
    const isSettled = useMemo(() => status === 'settled', [status]);

    const mutation = useMutation(api.workspaces.newJoinCode);
    
    const mutate = useCallback( async (values: RequestType, options?: Options) => {
        try {
            setData(null);
            setError(null);

            setStatus("settled")
            //setIsError(false);
            //setIsSettled(false);
            //setIsSuccess(false);
            //setIsPending(true);
            //
            const response = await mutation(values);
            options?.onSuccess?.(response);
        
            return response;
        } catch(error)  {
            setStatus("error");
            options?.onError?.(error as Error);

            if (options?.throwError) {
                throw error;
            }
        } finally {
            setStatus(null);    
            options?.onSettled?.();
        }
    }, [mutation])

    return {
        mutate, 
        data, 
        error, 
        isPending, 
        isSuccess, 
        isError, 
        isSettled
    }
};