import { Button } from "@nextui-org/react";
import useDeleteContainer from "../../hooks/useDeleteContainer";
import TrashIcon from "../common/TrashIcon";
import { useContext } from "react";
import ContainerListContext from "../../context/ContainerListContext";

interface IProps {
    containerId: string
}

const DeleteButton = ({ containerId }: IProps) => {
    const { containerList, setContainerList } = useContext(ContainerListContext);
    const { send } = useDeleteContainer(containerId);

    const onDeleteOneClick = async () => {
        const result = await send();

        if(result.deleted){
            setContainerList(containerList.filter((container) => container.id !== containerId));
        }
    }

    return  <button className="w-4 h-4 flex items-center justify-center" onClick={onDeleteOneClick}>
        <TrashIcon />
    </button>
}

export default DeleteButton;