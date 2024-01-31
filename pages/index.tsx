import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/react";
import useFetchOnClick from "../src/client/hooks/useFetchOnClick";

export default function Home() {
  const { fetchData: createContainer, error } = useFetchOnClick("/api/create");

  const [ deleteId, setDeleteId ] = useState('');

  const { fetchData: deleteContainer, error: deleteError } = useFetchOnClick(`/api/delete?id=${deleteId}`);


  const onCreateOneClick = async () => {
    await createContainer();
  }

  const onDeleteOneClick = async () => {
    await deleteContainer();
  }

  if(error || deleteError){
    alert(error || deleteError);
  }


  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={onCreateOneClick}>Create one</Button>
      <Input 
        type="text"
        label="Container Id" 
        placeholder="Enter container Id to delete" 
        defaultValue={deleteId} 
        onChange={e => setDeleteId(e.target.value)}
      />
      <Button onClick={onDeleteOneClick}>Delete one</Button>
    </div>
  );
}
