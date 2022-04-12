import axios from "../../axios"

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
                axios({
                    url: 'addtocart',
                    method: 'post',
                    data: action.item,
                    headers: { "Authorization": localStorage.getItem('token') }
                })
                return [...cart, action.item]
            }
        case 'REMOVE_ITEM':
            return cart.filter((product) => product.proId !== action.item.proId)

        default:
            return cart;
    }
}

export default reducer;