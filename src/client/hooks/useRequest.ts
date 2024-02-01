import { useState } from "react";

const useRequest = (baseUrl: string, params?: Record<string, string>) => {
    const [error, setError] = useState<Error | null>(null);
    const [result, setResult] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const url = new URL(baseUrl);

    if(params) {
        Object
            .entries(params)
            .forEach(([name, value]) => url.searchParams.append(name, value));
    }


    const send = async () => {
        setLoading(true);

        try {
            const result = await fetch(url).then((res) => res.json());
            setResult(result)
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }

    };

    return { result, error, isLoading, send }
}

export default useRequest