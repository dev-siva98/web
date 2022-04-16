import React from 'react'

function Checkout() {
    return (
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
                        <h3>&#8377;{cart.cartTotal}</h3>
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
    )
}

export default Checkout