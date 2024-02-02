import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import DeleteForm from "../src/client/components/DeleteForm";
import useCreateContainer from "@/src/client/hooks/useCreateContainer";
import useGetAllContainers from "@/src/client/hooks/useGetAllContainers";

export default function Home() {
  const { send, error } = useCreateContainer();

  const onCreateOneClick = async () => {
    await send();
  }

  if(error){
    alert(error);
  }

  const { result } = useGetAllContainers();


  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={onCreateOneClick}>Create one</Button>
      <DeleteForm />
    </div>
  );
}
