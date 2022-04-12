import React from 'react'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import './CartNew.css'


function CartItem() {
    return (
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
    )
}

export default CartItem