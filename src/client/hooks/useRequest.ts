import { useCallback, useState } from "react";

const useRequest = (baseUrl: string, params?: Record<string, string>) => {
	const [error, setError] = useState<Error | null>(null);
	const [result, setResult] = useState<any>(null);
	const [isLoading, setLoading] = useState(false);
	const searchParams = new URLSearchParams(params);

	const url = `${baseUrl}${searchParams.size ? `?${searchParams.toString()}` : ""}`;

	const send = useCallback(async () => {
		setLoading(true);

		try {
			const res = await fetch(url)

			if (!res.ok) {
				const error = await res.json();

				throw new Error(error.message);
			}

			const result = await res.json();

			setResult(result);
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