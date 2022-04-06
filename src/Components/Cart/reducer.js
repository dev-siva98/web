import axios from '../../axios'


export const initialState = {
    basket: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            var flag = false
            state.basket.map((product) => {
                if (product.id === action.item.id) {
                    flag = true
                }
            })
            if (flag) {
                alert('Item already added to the cart')
                return state
            } else {
                const pro = {
                    proId: action.item.id,
                    quantity: 1
                }
                console.log(pro, action.item)
                axios({
                    url: 'addtocart',
                    method: 'post',
                    data: pro,
                    headers: { "Authorization": localStorage.getItem('token') }
                })
                return {
                    ...state,
                    basket: [...state.basket, pro]
                }
            }
        case 'REMOVE_ITEM':
            state.basket.map((product) => {
                if (product.id === action.item.id) {
                    console.log('deleted')
                } else {
                    state.basket.push(product)
                }
            })
            return { state }
        default:
            return state;
    }
}

export default reducer;