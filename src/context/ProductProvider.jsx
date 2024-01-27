import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../state/productReducer";
import { actionTypes } from "../state/actionTypes";

export const PRODUCT_CONTEXT = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  console.log(state);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({type: actionTypes.FETCHING_ERROR});
      });
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

