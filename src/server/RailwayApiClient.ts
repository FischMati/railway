import { GraphQLClient } from "graphql-request"

const endpoint = "https://backboard.railway.app/graphql/v2"

const RailwayApiClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.RAILWAY_API_TOKEN}`,
    },
})

export default RailwayApiClient