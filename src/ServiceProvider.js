// Set up the data layer
// We need this to track the basket

import React, { createContext, useReducer, useContext} from "react";


//This is the Data Layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({reducer, initialState, children})=>{
    return (
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
    );
}


// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)
