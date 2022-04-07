// import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import axios from "../../axios";
// import cartReducer from "./cartReducer";


// const CartContext = createContext()

// export const initialState= {
//     basket: []
// }

// const CartProvider = ({ children }) => {
    
//     // const [initialState, setInitialState] = useState([])

//     // useEffect(() => {
//     //     axios.get('userdetails', {
//     //         headers: { "Authorization": localStorage.getItem('token') }
//     //     }).then(res => {
//     //         console.log(res)
//     //         const basket= res.data.cart
//     //         setInitialState(basket)
//     //     })
//     // }, []);

    

//     const [state, dispatch] = useReducer(cartReducer, initialState);

//     return (
//         <CartContext.Provider value={{ state, dispatch }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const CartState = () => {
//     useContext(CartContext)
// }

// export default CartProvider