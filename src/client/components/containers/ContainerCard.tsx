import React from "react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import DeleteButton from "./DeleteButton";

interface IProps {
	id: string;
	name: string;
}

const ContainerCard = ({ id, name }: IProps) => {
	return (
		<Card>
			<CardHeader className="justify-between">
				<div>
					<p>{name}</p>
				</div>
				<div>
					<DeleteButton containerId={id} />
				</div>
      		</CardHeader>
			<Divider/>
			<CardBody>
				<p>{id}</p>
			</CardBody>
		</Card>
	);
}

export default ContainerCard;
