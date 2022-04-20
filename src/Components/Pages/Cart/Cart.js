import React, { useEffect, useRef, useState } from 'react'
import CartItem from './CartItem'
import './Cart.css'
import { useCart, useDispatchCart } from '../../Cart/CartProvider'
import Authentication from '../../../Authentication'
import axios from '../../../axios'

function Cart() {

    Authentication()

    const cart = useCart()
    const dispatch = useDispatchCart()
    const scrollRef = useRef(null)
    const [checkout, setCheckout] = useState(false)

    useEffect(() => {
        if (cart.cartTotal > 0) {
            setCheckout(true)
        } else {
            setCheckout(false)
        }
    }, [cart])

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
        <div className='cart-section'>
            <div className="cart-section-container">
                <div className="cart-section-body">
                    <div className="cart-section-left">
                        <div className="cart-left-headers">
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
                        <hr className='cart-item-seperation' ref={scrollRef} />
                        <div className="cart-left-instructions">
                            <div className="cart-left-instructions-text">
                                <p>*Order for minimum 1000 and get free shipping <br />
                                    *You can get discount by coupon code in payment section <br />
                                    *Remember coupon is applicable to online payment only <br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-section-right" >
                        <div className="cart-section-right-container">
                            <div className="cart-section-right-body">
                                <div className="cart-right-coupon">
                                    <h3>Have coupon ?</h3>
                                    <div className="cart-coupon-input">
                                        <input type="text" placeholder='Coupon Code'
                                            onInput={(e) => e.target.value = e.target.value.toUpperCase()} />
                                        <button className="btn btn-cart-coupon">Apply</button>
                                    </div>
                                </div>
                                <div className="cart-right-total"  >
                                    <div className="cart-total-details">
                                        <div className="cart-total-item">
                                            <h3>Total Price:</h3>
                                            <h3>Shipping:</h3>
                                            <h3>Discount:</h3>
                                        </div>
                                        <div className="cart-total-amount">
                                            <h3>{cart.cartTotal}.00</h3>
                                            <h3>{cart.shipping}.00</h3>
                                            <h3>{cart.discount}.00</h3>
                                        </div>
                                    </div>
                                    <hr className='cart-total-partition' />
                                    <div className="cart-right-grand-total">
                                        <h3>Grand Total:</h3>
                                        <h3>&#8377; {cart.total}.00</h3>
                                    </div>
                                    <hr className='cart-total-partition' />
                                    <div className="cart-submit-button">
                                        <button type="submit" className="btn btn-cart-submit" disabled={!checkout}>
                                            Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart