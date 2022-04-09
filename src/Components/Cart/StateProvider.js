import axios from "../../axios";
import React, { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "./reducer";
import { AppContext, LoadingContext } from "../../AppContext";


const initialState = {
    basket: []
}

// Data layer

export const StateContext = createContext();

//this is how we use it inside of a component
export const CartState = () => useContext(StateContext)

// Provider
export const StateProvider = ({ children }) => {

    const { loggedIn } = useContext(AppContext)
    const { setLoading } = useContext(LoadingContext)
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (loggedIn) {
            setLoading(true)
            axios.get('userdetails', {
                headers: { "Authorization": localStorage.getItem('token') }
            }).then(res => {
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        ...initialState,
                        basket: res.data?.cart
                    }
                })
                setLoading(false)
            })
        } else {
            dispatch({
                type: 'CLEAR'
            })
        }
    }, [loggedIn])

    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
}

