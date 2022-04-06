import axios from "../../axios"
import { useState } from "react"

function Initialize(){
    const [cartItems, setCartItems] = useState([])
    axios.get('userdetails', {
        headers: { "Authorization": localStorage.getItem('token') }
    }).then(res => {
        console.log(res)
    })

}

export default Initialize