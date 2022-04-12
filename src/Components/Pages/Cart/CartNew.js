import React from 'react'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import './CartNew.css'

function CartNew() {
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
                        </div>
                        <div className="cart-left-content">
                            <div className="cart-left-product">
                                <div className="cart-product-image">
                                    <img src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg"
                                    alt="cake" className="cart-product-img" />
                                </div>
                                <div className="cart-product-details">
                                    <h2>Red velvet</h2>
                                    <h3>1 KG</h3>
                                    <h3>CC102</h3>
                                    <h3>&#8377;600</h3>
                                </div>
                            </div>
                            <div className="cart-left-qty">
                                <AiFillMinusSquare className='cart-qty-dec' />
                                <input type="text" className='cart-qty-value' value='2' disabled />
                                <AiFillPlusSquare className='cart-qty-inc' />
                            </div>
                            <div className="cart-left-price">
                                <h2>&#8377;1200</h2>
                            </div>
                            <div className="cart-left-button">
                                <button className="btn btn-cart-remove">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-section-right">
                        <div className="cart-right-coupon">
                            <h3>Have coupon ?</h3>
                            <div className="cart-coupon-input">
                                <input type="text" placeholder='Coupon Code' />
                                <button className="btn btn-cart-coupon">Apply</button>
                            </div>
                        </div>
                        <div className="cart-right-total">
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
                            <hr className='cart-total-partition'/>
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

export default CartNew