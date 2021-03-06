function reducer(cart, action) {
    switch (action.type) {

        case 'INITIALIZE':
            return {
                ...cart,
                cartTotal: action.payload.cartTotal,
                shipping: action.payload.shipping,
                discount: action.payload.discount,
                total: action.payload.total,
                items: [...action.payload.products]
            }
        case 'CLEAR_CART':
            return {
                ...cart,
                cartTotal: 0,
                shipping: 0,
                discount: 0,
                total: 0,
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
                const newCartTotal = cart.cartTotal + action.item.price
                var newShipping = 0
                if (newCartTotal < 1000 && newCartTotal > 0) {
                    newShipping = 50
                }
                const newTotal = newCartTotal + newShipping - cart.discount
                return {
                    ...cart,
                    cartTotal: newCartTotal,
                    shipping: newShipping,
                    discount: 0,
                    total: newTotal,
                    items: [...cart.items, action.item]
                }
            }
        case 'REMOVE_ITEM':
            const newItems = cart.items.filter((product) => product.proId !== action.item.proId)
            const newCartTotal = cart.cartTotal - (action.item.price * action.item.quantity)
            var removeShipping = 0
            if (newCartTotal < 1000 && newCartTotal > 0) {
                removeShipping = 50
            }
            const newTotal = newCartTotal + removeShipping - cart.discount
            return {
                ...cart,
                cartTotal: newCartTotal,
                shipping: removeShipping,
                discount: 0,
                total: newTotal,
                items: newItems
            }

        case 'INCREMENT':
            const itemIndex = cart.items.findIndex(prod => prod.proId === action.item.proId)
            cart.items[itemIndex].quantity++
            const incrementCartTotal = cart.cartTotal + action.item.price
            var incrementShipping = 0
            if (incrementCartTotal < 1000 && incrementCartTotal > 0) {
                incrementShipping = 50
            }
            const incrementTotal = incrementCartTotal + incrementShipping - cart.discount
            return {
                ...cart,
                cartTotal: incrementCartTotal,
                shipping: incrementShipping,
                discount: 0,
                total: incrementTotal,
                items: [...cart.items]
            }

        case 'DECREMENT':
            const findIndex = cart.items.findIndex(prod => prod.proId === action.item.proId)
            cart.items[findIndex].quantity--
            const decrementCartTotal = cart.cartTotal - action.item.price
            var decrementShipping = 0
            if (decrementCartTotal < 1000 && decrementCartTotal > 0) {
                decrementShipping = 50
            }
            const decrementTotal = decrementCartTotal + decrementShipping - cart.discount
            return {
                ...cart,
                cartTotal: decrementCartTotal,
                shipping: decrementShipping,
                discount: 0,
                total: decrementTotal,
                items: [...cart.items]
            }
        default:
            return cart;
    }
}

export default reducer;