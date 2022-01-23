export const initialState = {
    basket: []
}

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_ITEM':
            //add item
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_ITEM':
            //remove item
            return { state }
        default:
            return state;
    }
}

export default reducer;