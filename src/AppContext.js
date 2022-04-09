import { createContext } from "react";

export const AppContext = createContext({
    loggedIn: false,
    setLoggedIn: () => { }
})

export const LoadingContext = createContext({
    loading: false,
    setLoading: ()=>{}
})