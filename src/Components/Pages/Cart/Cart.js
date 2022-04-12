import React, { useRef } from 'react'
import CartItem from './CartItem'
import './CartNew.css'
import { useCart } from '../../Cart/CartProvider'

function Cart() {

    const scrollRef = useRef(null)
    const handleScroll = () => {
        scrollRef.current.scrollIntoView()
    }

    const cart = useCart()

    return (
        <div>
            <div className="cart-section">
                <h1 className="cart-header">My Cart</h1>
                <div className="cart-section-container">
                    <div className="cart-section-left">
                        <div className="cart-left-headers">
                            <h3>PRODUCT</h3>
                            <h3>QTY</h3>
                            <h3>PRICE</h3>
                            <button className="btn btn-cart-proceed-mobile" onClick={handleScroll}>Proceed to Checkout</button>
                            <button className="btn btn-clear-cart">Clear Cart</button>
                        </div>
                        {
                            cart.length===0 ? <>Cart Is Empty</> :
                            cart.map((product) => {
                                return (
                                    <>
                                        <CartItem product={product} key={product.proId} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="cart-section-right" ref={scrollRef}>
                        <div className="cart-right-coupon">
                            <h3>Have coupon ?</h3>
                            <div className="cart-coupon-input">
                                <input type="text" placeholder='Coupon Code'
                                    onInput={(e) => e.target.value = e.target.value.toUpperCase()} />
                                <button className="btn btn-cart-coupon">Apply</button>
                            </div>
                        </div>
                        <div className="cart-right-total" >
                            <div className="cart-total-details">
                                <div className="cart-total-item">
                                    <h3>Total Price:</h3>
                                    <h3>Shipping:</h3>
                                    <h3>Discount:</h3>
                                    <h3>Grand Total:</h3>
                                </div>
                                <div className="cart-total-amount">
                                    <h3>&#8377;600</h3>
                                    <h3>&#8377;50</h3>
                                    <h3>&#8377;100</h3>
                                    <h3>&#8377;550</h3>
                                </div>
                            </div>
                            <hr className='cart-total-partition' />
                            <div className="cart-right-action">
                                <button className="btn btn-cart-action">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart