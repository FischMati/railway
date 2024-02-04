interface RailwayApiError {
	errors: Error[]
}

export interface Error {
	message: string
}

export default RailwayApiError