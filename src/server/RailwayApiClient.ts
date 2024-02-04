import { GraphQLClient } from "graphql-request"
import ProcessEnv from "./ProcessEnv"

const RailwayApiClient = new GraphQLClient(ProcessEnv.getVariable("RAILWAY_API_ENDPOINT"), {
    headers: {
        authorization: `Bearer ${process.env.RAILWAY_API_TOKEN}`,
    },
})

export default RailwayApiClient