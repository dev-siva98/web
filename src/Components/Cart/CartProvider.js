import React, { useReducer, useContext, createContext, useEffect } from "react";
import cartReducer from './cartReducer'
import { AppContext, LoadingContext } from "../../AppContext";
import axios from "../../axios";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

function CartProvider({ children }){
  const [cart, dispatch] = useReducer(cartReducer, []);
  const {loggedIn} = useContext(AppContext)
  const { setLoading } = useContext(LoadingContext)
  
    useEffect(() => {
        if (loggedIn) {
            setLoading(true)
            axios.get('fetchcart', {
                headers: { "Authorization": localStorage.getItem('token') }
            }).then(res => {
              console.log(res)
                dispatch({
                    type: 'INITIALIZE',
                    payload: res.data
                })
                setLoading(false)
            })
        }
        else {
            dispatch({
                type: 'CLEAR_CART'
            })
        }
        return () => {
          setLoading(false)
        }
    },[loggedIn])

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={cart}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default CartProvider
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
