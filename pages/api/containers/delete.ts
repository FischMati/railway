import type { NextApiRequest, NextApiResponse } from "next";
import RailwayApiClient from "@/src/server/RailwayApiClient";
import DeleteContainer from "@/src/server/mutations/DeleteContainer";
import ServerError from "@/src/common/ServerError";
import RailwayApiError from "@/src/server/domain/RailwayApiError";
import { ClientError } from "graphql-request";
import RailwayApiDeleteResult from "@/src/server/domain/RailwayApiDeleteResult";

type ResponseData = { deleted: boolean } | ServerError;

const defaultError = "Unable to delete service. Try again later";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const id = req.query['id'];

  try {
    const data = await RailwayApiClient.request<RailwayApiDeleteResult | RailwayApiError>(DeleteContainer, { id })

    if ('serviceDelete' in data) {
      res.status(200).json({ deleted: data.serviceDelete });
    } else {
      res.status(500).json({ message: defaultError });
    }
  } catch (e) {
    const error = e as ClientError;
    const serverMessage = error.message.split(": {")[0];

    res.status(500).json({ message: serverMessage });
  }
}
