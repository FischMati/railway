interface RailwayApiError {
    errors: Error[]
    data: any
  }
  
export interface Error {
    message: string
}

export default RailwayApiError