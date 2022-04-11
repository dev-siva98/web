function reducer(cart, action) {
    switch (action.type) {

        case 'INITIALIZE':
            return [...action.payload]

        case 'CLEAR_CART':
            return []

        case 'ADD_ITEM':
            var flag = false
            cart.map((product) => {
                if (product.proId === action.item.id) {
                    flag = true
                }
                return flag
            })
            if (flag) {
                alert('Item already added to the cart')
                return cart
            } else {
                const pro = {
                    proId: action.item.id,
                    quantity: 1
                }
                // axios({
                //     url: 'addtocart',
                //     method: 'post',
                //     data: pro,
                //     headers: { "Authorization": localStorage.getItem('token') }
                // })
                return [...cart, pro]
            }
        case 'REMOVE_ITEM':
            return cart.filter((product) => product.proId !== action.item.id)

        default:
            return cart;
    }
}

export default reducer;