function reducer(cart, action) {
    switch (action.type) {

        case 'INITIALIZE':
            return {
                ...cart,
                cartTotal: action.payload.cartTotal,
                items: [...action.payload.products]
            }
        case 'CLEAR_CART':
            return {
                ...cart,
                cartTotal: 0,
                items: []
            }

        case 'ADD_ITEM':
            var flag = false
            cart.items.map((product) => {
                if (product.proId === action.item.proId) {
                    flag = true
                }
                return flag
            })
            if (flag) {
                alert('Item already added to the cart')
                return cart
            } else {
                action.item.quantity = 1
                return {
                    ...cart,
                    cartTotal: cart.cartTotal + action.item.price,
                    items: [...cart.items, action.item]
                }
            }
        case 'REMOVE_ITEM':
            const newItems = cart.items.filter((product) => product.proId !== action.item.proId)
            const newTotal = cart.cartTotal - (action.item.price * action.item.quantity)
            return {
                ...cart,
                cartTotal: newTotal,
                items: newItems
            }

        case 'INCREMENT':
            const itemIndex = cart.items.findIndex(prod => prod.proId === action.item.proId)
            cart.items[itemIndex].quantity++
            return {
                ...cart,
                cartTotal: cart.cartTotal + action.item.price,
                items: [...cart.items]
            }

        case 'DECREMENT':
            const findIndex = cart.items.findIndex(prod => prod.proId === action.item.proId)
            cart.items[findIndex].quantity--
            return {
                ...cart,
                cartTotal: cart.cartTotal - action.item.price,
                items: [...cart.items]
            }
        default:
            return cart;
    }
}

export default reducer;