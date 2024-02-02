import { useEffect } from "react";
import useRequest from "./useRequest";

const useGetAllContainers = () => {
    const { send, ...rest } = useRequest(
        '/api/containers/getAll',
    );

    useEffect(() => {
        send();
    }, [send])

    return rest
}

export default useGetAllContainers