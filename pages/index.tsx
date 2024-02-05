import React, { useReducer } from "react";
import RailwayApiClient from "@/src/server/RailwayApiClient";
import GetAllContainers from "@/src/server/queries/GetAllContainers";
import ContainerCard from "@/src/client/components/containers/ContainerCard";
import CreateContainerFAB from "@/src/client/components/containers/CreateContainerFAB";
import ContainerListContext from "@/src/client/context/ContainerListContext";
import ContainerListReducer from "@/src/client/reducers/ContainerListReducer";
import RailwayApiGetAllResult from "@/src/server/domain/RailwayApiGetAllResult";
import Container from "@/src/common/Container";

export async function getServerSideProps() {
	const {
		project: {
			services: {
				edges
			}
		}
	} = await RailwayApiClient.request<RailwayApiGetAllResult>(GetAllContainers)

	const services = edges.map(({ node }) => ({ id: node.id, name: node.name }));

	return {
		props: {
			services,
		}
	}
}

interface IProps {
	services: Container[]
}

export default function Home({ services }: IProps) {
	const [containerList, dispatch] = useReducer(ContainerListReducer, services);

	return (
		<ContainerListContext.Provider value={{ containerList, dispatch }}>
			<div className="p-24 gap-2 grid grid-cols-3">
				{containerList.map((container) => <ContainerCard key={container.id} {...container} />)}
			</div>
			<CreateContainerFAB />
		</ContainerListContext.Provider>
	);
}
