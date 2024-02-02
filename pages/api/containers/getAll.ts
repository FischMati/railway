// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient, gql  } from "graphql-request";

const endpoint = `https://backboard.railway.app/graphql/v2`

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer 92e7381a-5e20-4276-bb33-8bd8ef8d309c`,
  },
})

const TRIAL_ACCOUNT_SERVICE_LIMIT = 5;

const query = gql`
  query MyQuery {
    project(id: "caccd464-68a2-48e2-865b-03dbb7cd9158") {
      services(first: ${TRIAL_ACCOUNT_SERVICE_LIMIT}) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`

type QueryResult = {
  project: {
    services: {
      edges: { 
        node: {
          id: string,
          name: string
        }
      }[]
    }
  }
}

type ResponseData = {
  services: { id: string, name: string }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { 
    project: { 
      services: { 
        edges 
      }
    }
  } = await graphQLClient.request<QueryResult>(query)

  const services = edges.map(({ node }) => ({ id: node.id, name: node.name }));

  res.status(200).json({ services });
}
