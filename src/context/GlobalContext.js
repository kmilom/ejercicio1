import React, { createContext, useReducer } from "react";
import { appReducer } from "./AppReducer";

const initialState = {
  cart: [],
  totalItem: 0,
  total: 0.0,
  checkout: false
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const increase = (payload) => {
        dispatch({ type: "INCREASE", payload });
    };
    const decrease = (payload) => {
        dispatch({ type: "DECREASE", payload });
    };
    const addProduct = (payload) => {
        dispatch({ type: "ADD_ITEM", payload });
    };
    const removeProduct = (payload) => {
        dispatch({ type: "REMOVE_ITEM", payload });
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR" });
    };
    const checkout = () => {
        dispatch({ type: "CHECKOUT" });
    };

    const contextValues = {
        increase,
        decrease,
        addProduct,
        removeProduct,
        clearCart,
        checkout,
        ...state
    };

    return (
        <GlobalContext.Provider value={contextValues}>
            {children}
        </GlobalContext.Provider>
    );

};

export default GlobalContextProvider;
