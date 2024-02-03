type Container = {
  id: string;
  name: string;
}

type AppStateAction =
  | { type: 'CONTAINER_CREATED'; payload: Container }
  | { type: 'CONTAINER_DELETED'; payload: string }
  | { type: 'CREATING_CONTAINER' }
  | { type: 'CREATING_CONTAINER_FINISHED' }
  | { type: 'ERROR'; payload: Error };

type AppState = {
  containerList: Container[];
  containersInCreation: number;
  error: Error | null;
}

const AppStateReducer = (state: AppState, action: AppStateAction) => {
  switch (action.type) {
    case 'CONTAINER_CREATED':
      return { ...state, containerList: [...state.containerList, action.payload] };
    case 'CONTAINER_DELETED':
      return { ...state, containerList: state.containerList.filter(container => container.id !== action.payload) };
    case 'CREATING_CONTAINER':
      return { ...state, containersInCreation: state.containersInCreation + 1 };
    case 'CREATING_CONTAINER_FINISHED':
      return { ...state, containersInCreation: state.containersInCreation - 1 };
    case 'ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default AppStateReducer