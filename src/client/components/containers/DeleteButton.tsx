import { Button, Spinner } from "@nextui-org/react";
import useDeleteContainer from "../../hooks/useDeleteContainer";
import TrashIcon from "../common/TrashIcon";
import { useContext } from "react";
import ContainerListContext from "../../context/ContainerListContext";

interface IProps {
    containerId: string
}

const DeleteButton = ({ containerId }: IProps) => {
    const { dispatch } = useContext(ContainerListContext);
    const { send, isLoading } = useDeleteContainer(containerId);

    const onDeleteOneClick = async () => {
        const result = await send();

        if(result.deleted){
            dispatch({ type: 'DELETE_CONTAINER', payload: containerId });
        }
    }

    return  <div className="w-4 h-4"> 
        {
            isLoading ? 
                <Spinner size="sm" /> :
                <button className="w-4 h-4 flex items-center justify-center" onClick={onDeleteOneClick}>
                    <TrashIcon /> 
                </button>
        }
        </div>
}

export default DeleteButton;