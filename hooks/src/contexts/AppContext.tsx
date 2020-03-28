import React, { createContext, Reducer, useReducer } from "react";

export enum ActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

export const incrementAction = () => ({
  type: ActionTypes.INCREMENT
});

export const decrementAction = () => ({
  type: ActionTypes.DECREMENT
});

interface State {
  count: number;
}

export const INITIAL_STATE: State = {
  count: 0
};

export interface Action {
  type: ActionTypes;
  payload?: any;
}

const reducer: Reducer<State, Action> = (state, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: State;
  dispatch: (action: Action) => void;
}>({ state: INITIAL_STATE, dispatch: () => {} });

interface AppProviderProps {
  children?: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
