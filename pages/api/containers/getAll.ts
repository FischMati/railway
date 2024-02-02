import type { NextApiRequest, NextApiResponse } from "next";
import RailwayApiClient from "@/src/server/RailwayApiClient";
import GetAllContainers from "@/src/server/queries/GetAllContainers";

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
  } = await RailwayApiClient.request<QueryResult>(GetAllContainers)

  const services = edges.map(({ node }) => ({ id: node.id, name: node.name }));

  res.status(200).json({ services });
}
