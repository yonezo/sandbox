import { useContext, useCallback, useMemo } from "react";
import {
  AppContext,
  incrementAction,
  decrementAction
} from "../contexts/AppContext";

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext);
  const count = useMemo(() => state.count, [state.count]);
  const increment = useCallback(e => dispatch(incrementAction()), [dispatch]);
  const decrement = useCallback(e => dispatch(decrementAction()), [dispatch]);
  return { count, increment, decrement };
};
