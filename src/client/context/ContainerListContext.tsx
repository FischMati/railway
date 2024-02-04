import Container from "@/src/common/Container";
import React from "react";
import { ContainerListAction } from "../reducers/ContainerListReducer";

const ContainerListContext = React.createContext<{ containerList: Container[], dispatch: React.Dispatch<ContainerListAction> }>({
    containerList: [],
    dispatch: () => {}
});

export default ContainerListContext;