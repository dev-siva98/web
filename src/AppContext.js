import { createContext } from "react";

export const AppContext = createContext({
    loggedIn: false,
    setLoggedIn: () => { }
})

export const CartContext = createContext({
    cartInitial: [],
    setCartInitial: ()=>{}
})