import useRequest from "./useRequest";

const useCreateContainer = () =>
	useRequest(
		'/api/containers/create',
	)

export default useCreateContainer