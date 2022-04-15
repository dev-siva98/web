function reducer(cart, action) {
    switch (action.type) {

        case 'INITIALIZE':
            return [...action.payload]

        case 'CLEAR_CART':
            return []

        case 'ADD_ITEM':
            var flag = false
            cart.map((product) => {
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
                return [...cart, action.item]
            }
        case 'REMOVE_ITEM':
            return cart.filter((product) => product.proId !== action.item.proId)

        case 'INCREMENT':
            const itemIndex = cart.findIndex(item => item.proId === action.proId)
            cart[itemIndex].quantity++
            return [...cart]

        case 'DECREMENT':
            const findIndex = cart.findIndex(item => item.proId === action.proId)
            cart[findIndex].quantity--
            return [...cart]
        default:
            return cart;
    }
}

export default reducer;