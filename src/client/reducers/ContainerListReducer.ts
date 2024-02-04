import Container from "@/src/common/Container";

export type ContainerListAction =
  | { type: 'ADD_CONTAINER'; payload: Container }
  | { type: 'DELETE_CONTAINER'; payload: string }

const ContainerListReducer = (containerList: Container[], action: ContainerListAction) => {
  switch (action.type) {
    case 'ADD_CONTAINER':
      return [...containerList, action.payload];
    case 'DELETE_CONTAINER':
      return containerList.filter(container => container.id !== action.payload);
  }
};

export default ContainerListReducer