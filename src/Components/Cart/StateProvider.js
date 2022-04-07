import axios from "../../axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react"
import reducer from "./reducer";



const initialState = {
    basket: []
}
// Data layer

export const StateContext = createContext();

//this is how we use it inside of a component
export const CartState = () => useContext(StateContext)

// Provider

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('userdetails', {
            headers: { "Authorization": localStorage.getItem('token') }
        }).then(res =>{
            dispatch({
                type: 'INITIALIZE',
                payload:{
                    ...initialState,
                    basket:res.data?.cart}
                })
            }
        )
    }, []);
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
}

