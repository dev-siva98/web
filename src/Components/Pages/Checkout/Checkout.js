import React, { useEffect, useState } from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import './Checkout.css'

function Checkout() {

    const [verify, setVerify] = useState()
    const [otp, setOtp] = useState()
    const [done, setDone] = useState(false)
    const [loader, setLoader] = useState(false)
    const [mode, setMode] = useState(true)

    const handleOtp = () => {
        setTimeout(3000)
        if (otp === '123456') {
            setDone(true)
            setLoader(false)
        } else {
            setDone(false)
            setLoader(false)
        }
    }

    const handleGetOtp = () =>{
        setDone(false)
        setLoader(false)
        setVerify(null)
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
                                <h3>Complete Your Order</h3>
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
                                        <div className="checkout-form-section-full">
                                            <input type="text" className="checkout-form-input" placeholder='Write on cake' />
                                        </div>
                                        <h3 className='checkout-form-section-headers'>Address</h3>
                                        <div className="checkout-form-section-full">
                                            <input type="text" className="checkout-form-input" placeholder='Address Line 1' />
                                        </div>
                                        <div className="checkout-form-section-full">
                                            <input type="text" className="checkout-form-input" placeholder='Address Line 2' />
                                        </div>
                                        <div className="checkout-form-section-full">
                                            <input type="text" className="checkout-form-input" placeholder='Landmark' />
                                        </div>
                                        <div className="checkout-form-section">
                                            <div className="checkout-form-section-1">
                                                <input type="tel" className="checkout-form-input checkout-form-input-contact" placeholder='Contact Number' />
                                            </div>
                                            <div className="checkout-form-section-2">
                                                <input type="zipcode" className="checkout-form-input checkout-form-input-small" placeholder='PIN code' />
                                            </div>
                                        </div>
                                        <div className="checkout-form-payment-mode">
                                            <h3 className='checkout-form-section-headers'>Payment Mode</h3>
                                            <div className="checkout-form-payment-radio">
                                                <div className='checkout-form-payment-section'>
                                                    <label type='button' className={`btn btn-checkout-payment-mode pay-online ${mode ? 'active' : ''}`}
                                                        onClick={() => setMode(true)} > Pay now Online
                                                        <input type="radio" name="payment" value="online" defaultChecked />
                                                    </label>
                                                </div>
                                                <div className='checkout-form-payment-section' >
                                                    <label type='button' className={`btn btn-checkout-payment-mode ${mode ? '' : 'active'}`}
                                                        onClick={() => setMode(false)} >Cash on Delivery
                                                        <input type="radio" name="payment" value="cod" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-form-section">
                                            <div className="checkout-form-section-1">
                                                <input disabled={mode || loader || done} type="tel" className="checkout-form-input checkout-form-input-mobile" placeholder='Mobile' />
                                            </div>
                                            <button disabled={mode || loader || done} type='button' className="btn btn-checkout-mobile-verification"
                                            onClick={() => handleGetOtp()}>Get OTP</button>
                                            <div className="checkout-form-section-2">
                                                <input disabled={mode || loader || done} type="otp" className={`checkout-form-input checkout-form-input-small ${done ? 'verified' : ''}`}
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
                                        <div className="checkout-submit-button">
                                            <button type="submit" className="btn btn-checkout-submit">
                                                PROCEED TO PAY &#8377;12345</button>
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