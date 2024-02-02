import type { NextApiRequest, NextApiResponse } from "next";
import RailwayApiClient from "@/src/server/RailwayApiClient";
import CreateContainer from "@/src/server/mutations/CreateContainer";

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
  const data = await RailwayApiClient.request<MutationResult>(CreateContainer)

  res.status(200).json({ id: data.serviceCreate.id });
}
