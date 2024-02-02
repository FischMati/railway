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
  mutation MyMutation($id: String!) {
    serviceDelete(id: $id)
  }
`

type MutationResult = {
  serviceDelete: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MutationResult>,
) {
  const id = req.query['id'];

  const { serviceDelete } = await graphQLClient.request<MutationResult>(query, { id })

  res.status(200).json({ serviceDelete });
}
