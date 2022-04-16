import React, { useRef } from 'react'
import CartItem from './CartItem'
import './CartNew.css'
import { useCart, useDispatchCart } from '../../Cart/CartProvider'
import Authentication from '../../../Authentication'
import axios from '../../../axios'

function Cart() {

    Authentication()

    const cart = useCart()
    const dispatch = useDispatchCart()
    const scrollRef = useRef(null)

    const handleScroll = () => {
        scrollRef.current.scrollIntoView()
    }

    const handleClearCart = () => {
        dispatch({
            type: 'CLEAR_CART'
        })
        axios.get('clearcart', {
            headers: { "Authorization": localStorage.getItem('token') }
        }).then(res => {
            if (res.data.error) {
                console.log(res.data.message)
            }
        })
    }


    return (
        <div>
            <div className="cart-section">
                <h1 className="cart-header">My Cart</h1>
                <div className="cart-section-container">
                    <div className="cart-section-main">
                        <div className="cart-main-headers">
                            <h3>PRODUCT</h3>
                            <h3>QTY</h3>
                            <h3>PRICE</h3>
                            <button onClick={handleScroll}
                                className="btn btn-cart-proceed-mobile">Proceed to Checkout</button>
                            <button onClick={handleClearCart}
                                className="btn btn-clear-cart">Clear Cart</button>
                        </div>
                        {
                            cart.items.length === 0 ? <>Cart Is Empty</> :
                                cart.items.map((product) => {
                                    return (
                                        <CartItem product={product} key={product.proId} />
                                    )
                                })
                        }
                        <div className="cart-total-price">
                            <h3>Total Price:</h3>
                            <h2>&#8377; {cart.cartTotal}</h2>
                        </div>
                        <hr className='cart-item-seperation' />
                        <div className="cart-main-checkout">
                            <div className="cart-checkout-text">
                                <p>*Order for minimum 1000 and get free shipping <br />
                                    *You can get discount by coupon code in payment section <br />
                                    *Remember coupon is applicable to online payment only <br />
                                </p>
                            </div>
                            <button className="btn btn-cart-action">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart