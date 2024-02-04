import type { NextApiRequest, NextApiResponse } from "next";
import RailwayApiClient from "@/src/server/RailwayApiClient";
import CreateContainer from "@/src/server/mutations/CreateContainer";
import RailwayApiError from "@/src/server/domain/RailwayApiError";
import Container from "@/src/common/Container";
import ServerError from "@/src/common/ServerError";
import { ClientError } from "graphql-request";
import RailwayApiCreateResult from "@/src/server/domain/RailwayApiCreateResult";

type ResponseData = Container | ServerError;

const defaultError = "Unable to create service. Try again later";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) {
	try {
		const data = await RailwayApiClient.request<RailwayApiCreateResult | RailwayApiError>(CreateContainer)

		if ("serviceCreate" in data) {
			res.status(200).json({ id: data.serviceCreate.id, name: data.serviceCreate.name });
		} else {
			res.status(500).json({ message: defaultError });
		}
	} catch (e) {
		const error = e as ClientError;
		const serverMessage = error.message.split(": {")[0];

		res.status(500).json({ message: serverMessage });
	}
}
