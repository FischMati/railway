// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient, gql  } from "graphql-request";

const endpoint = `https://backboard.railway.app/graphql/v2`

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer 92e7381a-5e20-4276-bb33-8bd8ef8d309c`,
  },
})

const query = gql`
  mutation MyMutation {
    serviceCreate(input: {projectId: "caccd464-68a2-48e2-865b-03dbb7cd9158"}) {
      id
    }
  }
`

type MutationResult = {
  serviceCreate: {
    id: string
  }
}

type ResponseData = {
  id: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const data = await graphQLClient.request<MutationResult>(query)

  res.status(200).json({ id: data.serviceCreate.id });
}
