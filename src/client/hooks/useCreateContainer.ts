import useRequest from "./useRequest";

const useCreateContainer = () => 
    useRequest(
        '/api/create',
    )

export default useCreateContainer