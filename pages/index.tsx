import React, { useReducer, useState } from "react";
import RailwayApiClient from "@/src/server/RailwayApiClient";
import GetAllContainers from "@/src/server/queries/GetAllContainers";
import ContainerCard from "@/src/client/components/containers/ContainerCard";
import CreateContainerFAB from "@/src/client/components/containers/CreateContainerFAB";
import AppStateContext from "@/src/client/context/AppStateContext";
import AppStateReducer from "@/src/client/reducers/AppStateReducer";

type QueryResult = {
  project: {
    services: {
      edges: { 
        node: {
          id: string,
          name: string
        }
      }[]
    }
  }
}

export async function getServerSideProps() {
  const { 
    project: { 
      services: { 
        edges 
      }
    }
  } = await RailwayApiClient.request<QueryResult>(GetAllContainers)

  const services = edges.map(({ node }) => ({ id: node.id, name: node.name }));
 
  return {
    props: {
      services,
    }
  }
}

interface IProps {
  services: {
    id: string;
    name: string;
  }[]
}

export default function Home({ services }: IProps) {
  const [appState, dispatch] = useReducer(AppStateReducer, {
    containerList: services,
    error: null
  });

  return (
      <AppStateContext.Provider value={{ appState, dispatch }}>
        <div className="p-24 gap-2 grid grid-cols-3">
          { appState.containerList.map((container, index) => <ContainerCard key={index} {...container} />) }
        </div>
        <CreateContainerFAB />      
      </AppStateContext.Provider>
  );
}
