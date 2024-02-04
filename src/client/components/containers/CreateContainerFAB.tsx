import { useContext } from "react";
import useCreateContainer from "../../hooks/useCreateContainer";
import FloatingButton from "../common/FloatingButton";
import AppStateContext from "../../context/AppStateContext";

const CreateContainerFAB = () => {
    const { send, error, isLoading } = useCreateContainer();
    const { dispatch } = useContext(AppStateContext);

    const onCreateOneClick = async () => {
      const result = await send();
      
      if(result.id) {
        const { id, name } = result;
        dispatch({ type: 'CONTAINER_CREATED', payload: { id, name } });
      } else if (result instanceof Error) {
        dispatch({ type: 'ERROR', payload: result });
      }
    }

    return  <FloatingButton onClick={onCreateOneClick} isLoading={isLoading} />    
}

export default CreateContainerFAB