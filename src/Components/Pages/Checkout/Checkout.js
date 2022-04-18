import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout-section">
            <div className="checkout-section-container">
                <div className="checkout-section-left">
                    <div className="checkout-address-section">
                        <div className="checkout-address-container" >
                            <div className="checkout-address-first">
                                <div className="checkout-address-first-inner">
                                    <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
                                        data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
                                        data-mdb-animation-on-scroll="repeat" className="fas fa-3x fa-shipping-fast text-white"></i>
                                    <h3>Welcome</h3>
                                    <p>You are 30 seconds away from completing your order!</p>
                                </div>
                                <div className="checkout-left-button">
                                    <button type="button" className="btn btn-checkout-back">Go back</button>
                                </div>

                            </div>
                            <div className="checkout-address-second">
                                <div className="checkout-second-inner">
                                    <div className="checkout-second-body">
                                        <div className="checkout-second-text">
                                            <h4 >Delivery Details</h4>
                                        </div>
                                        <form className="checkout-address-form">
                                            <div className="checkout-form-section-inner">
                                                <div className="checkout-form-outline">
                                                    <input type="text" className="checkout-form-input" placeholder='Address Line 1' />
                                                </div>
                                            </div>
                                            <div className="checkout-form-section-inner">
                                                <div className="checkout-form-outline">
                                                    <input type="text" className="checkout-form-input" placeholder='Address Line 2' />
                                                </div>
                                            </div>
                                            <div className="checkout-form-section">
                                                <div className="checkout-form-section-inner-1">
                                                    <div className="checkout-form-outline">
                                                        <input type="text" id="typeEmail" className="checkout-form-input" placeholder='Landmark' />
                                                    </div>
                                                </div>
                                                <div className="checkout-form-section-inner-2">
                                                    <div className="checkout-form-outline">
                                                        <input type="zipcode" className="checkout-form-input checkout-form-input-small" placeholder='PIN code' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="checkout-form-section">
                                                <div className="checkout-form-section-inner-1">
                                                    <div className="checkout-form-outline">
                                                        <input type="tel" className="checkout-form-input " placeholder='Contact' />
                                                    </div>
                                                </div>
                                                <button className="btn btn-checkout-mobile-verification">Get OTP</button>
                                                <div className="checkout-form-section-inner-2">
                                                    <div className="checkout-form-outline">
                                                        <input type="otp" className="checkout-form-input checkout-form-input-small" placeholder='OTP' />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="float-end ">
                                                {/* <!-- Submit button --> */}
                                                <button type="submit" className="btn btn-primary btn-rounded">Place order</button>
                                                {/* style="background-color: #0062CC ;" */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-section-right">
                    <div className="checkout-section-right-container">
                        <div className="checkout-right-coupon">
                            <h3>Have coupon ?</h3>
                            <div className="checkout-coupon-input">
                                <input type="text" placeholder='Coupon Code'
                                    onInput={(e) => e.target.value = e.target.value.toUpperCase()} />
                                <button className="btn btn-checkout-coupon">Apply</button>
                            </div>
                        </div>
                        <div className="checkout-right-total" >
                            <div className="checkout-total-details">
                                <div className="checkout-total-item">
                                    <h3>Total Price:</h3>
                                    <h3>Shipping:</h3>
                                    <h3>Discount:</h3>
                                    <h3>Grand Total:</h3>
                                </div>
                                <div className="checkout-total-amount">
                                    <h3>&#8377;500</h3>
                                    <h3>&#8377;50</h3>
                                    <h3>&#8377;100</h3>
                                    <h3>&#8377;550</h3>
                                </div>
                            </div>
                            <hr className='checkout-total-partition' />
                            <div className="checkout-right-action">
                                <button className="btn btn-checkout-action">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Checkout