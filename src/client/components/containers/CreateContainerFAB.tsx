import { useContext } from "react";
import useCreateContainer from "../../hooks/useCreateContainer";
import FloatingButton from "../common/FloatingButton";
import ContainerListContext from "../../context/ContainerListContext";

const CreateContainerFAB = () => {
    const { send } = useCreateContainer();
    const { containerList, setContainerList } = useContext(ContainerListContext);


    const onCreateOneClick = async () => {
      const result = await send();
      
      if(result.id) {
          const { id, name } = result;
          setContainerList([...containerList, { id, name }]);
      }
    }

    return <FloatingButton onClick={onCreateOneClick} />
}

export default CreateContainerFAB