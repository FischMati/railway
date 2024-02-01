import useRequest from "./useRequest";

const useDeleteContainer = (containerId: string) => 
    useRequest(
        '/api/delete',
        { id: containerId }
    )

export default useDeleteContainer