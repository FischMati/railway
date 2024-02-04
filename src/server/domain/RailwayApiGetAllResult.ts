import Container from "@/src/common/Container"

interface RailwayApiGetAllResult {
	project: {
		services: {
			edges: {
				node: Container
			}[]
		}
	}
}

export default RailwayApiGetAllResult