import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import useDeleteContainer from "../hooks/useDeleteContainer";

const DeleteForm = () => {
    const [ deleteId, setDeleteId ] = useState('');
    const { error, send } = useDeleteContainer(deleteId);

    const onDeleteOneClick = async () => {
        await send();
    }

    if(error){
        alert(error);
      }

    return <>
        <Input
            type="text"
            label="Container Id"
            placeholder="Enter container Id to delete"
            value={deleteId}
            onChange={e => setDeleteId(e.target.value)} />
        <Button onClick={onDeleteOneClick}>Delete one</Button>
    </>;
}

export default DeleteForm;