import React from 'react'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import './CartNew.css'


function CartItem({ product }) {
    return (
        <>
            <div className="cart-left-content">
                <div className="cart-left-product">
                    <div className="cart-product-image">
                        <img src={product.image}
                            alt="cake" className="cart-product-img" />
                    </div>
                    <div className="cart-product-details">
                        <h2>{product.pname}</h2>
                        <h3>{product.weight}</h3>
                        <h3>{product.proId}</h3>
                        <h3>&#8377;{product.price}</h3>
                    </div>
                </div>
                <div className="cart-left-qty">
                    <AiFillMinusSquare className='cart-qty-dec' />
                    <input type="text" className='cart-qty-value' value={product.quantity} disabled />
                    <AiFillPlusSquare className='cart-qty-inc' />
                </div>
                <div className="cart-left-price">
                    <h2>&#8377;{product.quantity * product.price}</h2>
                </div>
                <div className="cart-left-button">
                    <button className="btn btn-cart-remove">Remove</button>
                </div>
            </div>
            <hr className='cart-item-seperation' />
        </>
    )
}

export default CartItem