export const initialState = {
    basket: []
}

function reducer(state, action) {
    console.log(action)
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
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                }
            }
        case 'REMOVE_ITEM':
            state.basket.map((product)=> {
                if(product.id===action.item.id) {
                    console.log('deleted')
                }else {
                    state.basket.push(product)
                }
            })
            return { state }
        default:
            return state;
    }
}

export default reducer;