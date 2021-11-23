import React from 'react'
import './Cart.css'
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'

function Cart() {
    return (
        <div>
            <div className="cart-section">
                <div className="cart-section-container">
                    <h1 className='cart-header'>Cart</h1>
                    <div className="cart-section-main">
                        <div className="cart-items">
                            <div className="cart-item">
                                <div className="cart-item-product">
                                    <div className="cart-item-image">
                                        <img className='cart-item-img' src="images/custom.jpg" alt="item" />
                                    </div>
                                    <div className="cart-item-details">
                                        <h2 className="cart-item-name">
                                            Red velvet
                                        </h2>
                                        <h3>1 KG</h3>
                                        <h4>MC101</h4>
                                        <h4>&#8377;600</h4>
                                    </div>
                                </div>
                                <div className="cart-items-details">

                                    <div className="cart-item-availability">
                                        Available
                                    </div>
                                    <div className="cart-item-quantity">
                                        <BiMinusCircle className='quantity-button minus-icon' />
                                        2
                                        <BiPlusCircle className='quantity-button plus-icon' />
                                    </div>
                                    <div className="cart-item-price">
                                        &#8377;1200
                                    </div>
                                    <MdDeleteForever className='delete-icon' />
                                </div>
                            </div>

                            <hr className="cart-items-partition" />
                            <div className="cart-item">
                                <div className="cart-item-product">
                                    <div className="cart-item-image">
                                        <img className='cart-item-img' src="images/custom.jpg" alt="item" />
                                    </div>
                                    <div className="cart-item-details">
                                        <h2 className="cart-item-name">
                                            Red velvet
                                        </h2>
                                        <h3>1 KG</h3>
                                        <h4>MC101</h4>
                                        <h4>&#8377;600</h4>
                                    </div>
                                </div>
                                <div className="cart-items-details">

                                    <div className="cart-item-availability">
                                        Available
                                    </div>
                                    <div className="cart-item-quantity">
                                        <BiMinusCircle className='quantity-button minus-icon' />
                                        2
                                        <BiPlusCircle className='quantity-button plus-icon' />
                                    </div>
                                    <div className="cart-item-price">
                                        &#8377;1200
                                    </div>
                                    <MdDeleteForever className='delete-icon' />
                                </div>
                            </div>

                            <hr className="cart-items-partition" />

                            <div className="cart-items-total-price">
                                <h2>Item Total :  &#8377; 2400.00</h2>
                            </div>

                        </div>
                        <div className="cart-total-price">
                            <div className="cart-total-calc">
                                <h2>Sub Total : </h2>
                                <h2>&#8377;1200.00</h2>
                            </div>
                            <div className="cart-total-calc">
                                <h2>Shipping : </h2>
                                <h2>&#8377;50.00</h2>
                            </div>
                            <hr />
                            <div className="cart-total-calc">
                                <h2>Total : </h2>
                                <h2>&#8377;1250.00</h2>
                            </div>
                        </div>

                        <button className='btn btn-green btn-proceed'>Checkout</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
