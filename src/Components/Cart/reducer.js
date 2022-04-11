// function reducer(state, action) {
//     switch (action.type) {

//         case 'INITIALIZE':
//             action.basket.map((prod) => {
//                 state.basket=[...state.basket,prod]
//             })
//             return state

//         case 'CLEAR_CART':
//             return state={
//                 basket:[]
//             }

//         case 'ADD_ITEM':
//             var flag = false
//             state.basket.map((product) => {
//                 if(product.proId === action.item.id) {
//                     flag = true
//                 }
//                 return flag
//             })
//             if (flag) {
//                 alert('Item already added to the cart')
//                 return state
//             } else {
//                 const pro = {
//                     proId: action.item.id,
//                     quantity: 1
//                 }
//                 // axios({
//                 //     url: 'addtocart',
//                 //     method: 'post',
//                 //     data: pro,
//                 //     headers: { "Authorization": localStorage.getItem('token') }
//                 // })
//                 return {
//                     ...state,
//                     basket: [...state.basket, pro]
//                 }
//             }
//         case 'REMOVE_ITEM':
//             return {
//                 basket: state.basket.filter((product) => product.proId !== action.item.id)
//             }
//         default:
//             return state;
//     }
// }

// export default reducer;