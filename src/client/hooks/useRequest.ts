import { useCallback, useState } from "react";

const useRequest = (baseUrl: string, params?: Record<string, string>) => {
    const [error, setError] = useState<Error | null>(null);
    const [result, setResult] = useState<any>(null);
    const [isLoading, setLoading] = useState(false);
    const searchParams = new URLSearchParams(params);

    const url = `${baseUrl}${searchParams.size ? `?${searchParams.toString()}` : ''}`;

    const send = useCallback(async () => {
        setLoading(true);

        try {
            const result = await fetch(url).then((res) => res.json());
            setResult(result)
            
            return result;
        } catch (error) {
            setError(error as Error);
            return error;
        } finally {
            setLoading(false);
        }
    }, [url]);

    return { result, error, isLoading, send }
}

export default useRequest