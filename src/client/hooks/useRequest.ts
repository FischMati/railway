import { useCallback, useState } from "react";

const useRequest = (baseUrl: string, params?: Record<string, string>) => {
    const searchParams = new URLSearchParams(params);

    const url = `${baseUrl}${searchParams.size ? `?${searchParams.toString()}` : ''}`;

    const send = useCallback(async () => {
        try {
            const result = await fetch(url).then((res) => res.json());            
            return result;
        } catch (error) {
            return error;
        }
    }, [url]);

    return { send }
}

export default useRequest