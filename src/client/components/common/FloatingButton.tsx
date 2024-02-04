import React from "react";
import { Button, Spinner } from "@nextui-org/react";
import PlusIcon from "./PlusIcon";

interface IProps {
	onClick(): void;
	isLoading: boolean;
}

const FloatingButton = ({ onClick, isLoading }: IProps) => {
	return (
		<div className="fixed bottom-0 right-0 p-4">
			<Button isIconOnly onClick={onClick} disabled={isLoading}>
				<div className="w-6 h-6 flex items-center justify-center">
					{isLoading ? <Spinner size="sm" /> : <PlusIcon />}
				</div>
			</Button>
		</div>
	);
};

export default FloatingButton;