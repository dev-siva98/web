import axios from "./axios";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

function Authentication(){

    const { setLoggedIn } = useContext(AppContext)
    useEffect(() => {
        axios.get('auth', { headers: { "Authorization": localStorage.getItem('token') } })
        .then(res => {
            if (res.data.error) {
                throw (res.data.message)    
            } else {
                setLoggedIn(true)
            }
        })
        .catch(err => {
            setLoggedIn(false)
        })
    },[])
}

export default Authentication