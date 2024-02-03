import React from "react";
import { Card, CardBody, CardHeader, Divider, Skeleton } from "@nextui-org/react";

const SkeletonCard = () => {
	return (
		<Card>
			<CardHeader>
				<Skeleton className="rounded-lg w-[100%] h-[24px]" />
			</CardHeader>
			<Divider/>
			<CardBody>
				<Skeleton className="rounded-lg w-[100%] h-[48px]" />
			</CardBody>
		</Card>
	);
}

export default SkeletonCard;
