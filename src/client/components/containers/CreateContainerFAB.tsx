import { useContext } from "react";
import useCreateContainer from "../../hooks/useCreateContainer";
import FloatingButton from "../common/FloatingButton";
import AppStateContext from "../../context/AppStateContext";

const CreateContainerFAB = () => {
    const { send } = useCreateContainer();
    const { dispatch } = useContext(AppStateContext);

    const onCreateOneClick = async () => {
      dispatch({ type: 'CREATING_CONTAINER' })
      const result = await send();
      
      if(result.id) {
        const { id, name } = result;
        dispatch({ type: 'CONTAINER_CREATED', payload: { id, name } });
      } else if (result instanceof Error) {
        dispatch({ type: 'ERROR', payload: result });
      }

      dispatch({ type: 'CREATING_CONTAINER_FINISHED' })
    }

    return <FloatingButton onClick={onCreateOneClick} />
}

export default CreateContainerFAB