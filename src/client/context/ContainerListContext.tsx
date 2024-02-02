import React from "react";

const ContainerListContext = React.createContext<{ containerList: {id: string, name:string}[], setContainerList: any }>({
    containerList: [],
    setContainerList: () => {}
});

export default ContainerListContext;