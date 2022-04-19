import React, { useEffect, useState } from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import './Checkout.css'

function Checkout() {

    const [verify, setVerify] = useState()
    const [otp, setOtp] = useState()
    const [done, setDone] = useState(false)
    const [loader, setLoader] = useState(false)

    const handleOtp = () => {
        setTimeout(3000)
        if (otp === '123456') {
            setDone(true)
            setLoader(false)
        }
    }
    useEffect(() => {
        if (verify === 6) {
            setLoader(true)
            setTimeout(handleOtp, 5000)
        } else {
            setDone(false)
            setLoader(false)
        }
    }, [verify])

    console.log(verify)
    return (
        <div className="checkout-section">
            <div className="checkout-section-container">
                <div className="checkout-section-left">
                    <div className="checkout-address-container" >
                        <div className="checkout-address-first">
                            <div className="checkout-address-first-inner">
                                <FaShippingFast className='checkout-delivery-icon' />
                                <h3>Complete Order</h3>
                                <p>You are just 30 seconds away from completing your order!</p>
                            </div>
                            <div className="checkout-left-button">
                                <button type="button" className="btn btn-checkout-back">GO BACK</button>
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
                                        <div className="checkout-form-section-inner">
                                            <div className="checkout-form-outline">
                                                <input type="text" className="checkout-form-input" placeholder='What to write on cake' />
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
                                                    <input type="tel" className="checkout-form-input checkout-form-input-contact" placeholder='Contact' />
                                                </div>
                                            </div>
                                            <button className="btn btn-checkout-mobile-verification">Get OTP</button>
                                            <div className="checkout-form-section-inner-2">
                                                <div className="checkout-form-outline">
                                                    <input type="otp" className={`checkout-form-input checkout-form-input-small ${done ? 'verified' : ''}`}
                                                        placeholder='OTP'
                                                        onChange={(e) => {
                                                            setVerify(e.target.value.length)
                                                            setOtp(e.target.value)
                                                        }}
                                                    />
                                                    {done && <GoVerified className='checkout-otp-verification' />}
                                                    {loader && <div className='checkout-otp-verify-loader' />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-submit-button">
                                            <button type="submit" className="btn btn-checkout-submit">
                                                Proceed to payment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Checkout