function reducer(state, action) {
    switch (action.type) {

        case 'INITIALIZE':
            return []

        case 'CLEAR_CART':
            return []

        case 'ADD_ITEM':
            var flag = false
            state.map((product) => {
                if (product.proId === action.item.id) {
                    flag = true
                }
                return flag
            })
            if (flag) {
                alert('Item already added to the cart')
                return state
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
                return [...state, pro]
            }
        case 'REMOVE_ITEM':
            console.log(state, "state")
            return state.filter((product) => product.proId !== action.item.id)

        default:
            return state;
    }
}

export default reducer;