import React, { useReducer, useContext, createContext } from "react";
import cartReducer from './cartReducer'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

function CartProvider({ children }){
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default CartProvider
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
