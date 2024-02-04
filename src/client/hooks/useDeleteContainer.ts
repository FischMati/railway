import useRequest from "./useRequest";

const useDeleteContainer = (containerId: string) =>
	useRequest(
		'api/containers/delete',
		{ id: containerId }
	)

export default useDeleteContainer