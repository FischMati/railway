import type { NextApiRequest, NextApiResponse } from "next";
import RailwayApiClient from "@/src/server/RailwayApiClient";
import DeleteContainer from "@/src/server/mutations/DeleteContainer";

type MutationResult = {
  serviceDelete: boolean
}

type ResponseData = {
  deleted: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const id = req.query['id'];

  const { serviceDelete } = await RailwayApiClient.request<MutationResult>(DeleteContainer, { id })

  res.status(200).json({ deleted: serviceDelete });
}
