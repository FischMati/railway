import { useContext } from "react";
import useCreateContainer from "../../hooks/useCreateContainer";
import FloatingButton from "../common/FloatingButton";
import ContainerListContext from "../../context/ContainerListContext";

const CreateContainerFAB = () => {
    const { send, isLoading } = useCreateContainer();
    const { dispatch } = useContext(ContainerListContext);

    const onCreateOneClick = async () => {
      const result = await send();
      
      if(result.id) {
        const { id, name } = result;
        dispatch({ type: 'ADD_CONTAINER', payload: { id, name } });
      }
    }

    return  <FloatingButton onClick={onCreateOneClick} isLoading={isLoading} />    
}

export default CreateContainerFAB