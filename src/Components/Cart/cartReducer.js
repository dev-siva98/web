// import axios from "../../axios";


// function cartReducer(state, action){
//     switch (action.type) {
        
//         // case 'INITIALIZE_CART':
//         //     return {
//         //         ...state,
//         //         basket: action.payload
//         //     };

//         case 'ADD_ITEM':
//             var flag = false
//             state.basket.map((product) => {
//                 if (product.id === action.payload.id) {
//                     flag = true
//                 }
//             })
//             if (flag) {
//                 alert('Item already added to the cart')
//                 return state
//             } else {
//                 const pro = {
//                     proId: action.payload.id,
//                     quantity: 1
//                 }
//                 console.log(pro, action.payload)
//                 axios({
//                     url: 'addtocart',
//                     method: 'post',
//                     data: pro,
//                     headers: { "Authorization": localStorage.getItem('token') }
//                 })
//                 return {
//                     ...state,
//                     basket: [...state.basket, pro]
//                 }
//             }
        

//         default:
//             return state;
//     }
// };

// export default cartReducer;
