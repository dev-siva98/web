import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from '../../../axios';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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

    const handleGetOtp = () => {
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

    const formSchema = Yup.object().shape({
        address1: Yup.string()
            .required('Missing Fields'),
        contact: Yup.string()
            .required('Missing Fields')
            .length(10, 'Enter valid phone number'),
        pincode: Yup.string()
            .required('Missing Fields')
            .min(6, 'Password length should be at least 4 characters'),
        payment: Yup.string()
            .required('Missing Fields'),
        mobile: Yup.string()
            .when('payment', {
                is: 'cod',
                then: Yup.string().required('Required')
            })

    })

    const validationOpt = { resolver: yupResolver(formSchema) }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(validationOpt);

    const onSubmit = (data) => {
        console.log(data)
    }

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
                                    <form onSubmit={handleSubmit(onSubmit)} className="checkout-address-form">
                                        <div className="checkout-form-section-full">
                                            <input type="text" placeholder='Write on cake' {...register('write')}
                                                className="checkout-form-input" />
                                        </div>
                                        <h3 className='checkout-form-section-headers'>Address</h3>
                                        <div className="checkout-form-section-full">
                                            <input type="text" placeholder='Address Line 1' {...register('address1', { required: true })}
                                                className={`checkout-form-input ${errors.address1 && 'checkout-input-error'}`} />
                                        </div>
                                        <div className="checkout-form-section-full">
                                            <input type="text" placeholder='Address Line 2' {...register('address2')}
                                                className="checkout-form-input" />
                                        </div>
                                        <div className="checkout-form-section-full">
                                            <input type="text" placeholder='Landmark'  {...register('landmark')}
                                                className="checkout-form-input" />
                                        </div>
                                        <div className="checkout-form-section">
                                            <div className="checkout-form-section-1">
                                                <input type="tel" placeholder='Contact Number'  {...register('contact', { required: true })}
                                                    className={`checkout-form-input checkout-form-input-contact ${errors.contact && 'checkout-input-error'}`} />
                                            </div>
                                            <div className="checkout-form-section-2">
                                                <input type="zipcode" placeholder='PIN code'  {...register('pincode', { required: true })}
                                                    className={`checkout-form-input checkout-form-input-small ${errors.pincode && 'checkout-input-error'}`} />
                                            </div>
                                        </div>
                                        <div className="checkout-form-payment-mode">
                                            <h3 className='checkout-form-section-headers'>Payment Mode</h3>
                                            <div className="checkout-form-payment-radio">
                                                <div className='checkout-form-payment-section'>
                                                    <label type='button' className={`btn btn-checkout-payment-mode pay-online ${mode ? 'active' : ''}`}
                                                        onClick={() => setMode(true)} > Pay now Online
                                                        <input type="radio" name="payment" value="online" defaultChecked {...register('payment', { required: true })} />
                                                    </label>
                                                </div>
                                                <div className='checkout-form-payment-section' >
                                                    <label type='button' className={`btn btn-checkout-payment-mode ${mode ? '' : 'active'}`}
                                                        onClick={() => setMode(false)} >Cash on Delivery
                                                        <input type="radio" name="payment" value="cod" {...register('payment', { required: true })} />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-form-section">
                                            <div className="checkout-form-section-1">
                                                <input disabled={mode || loader || done} type="tel"
                                                    className={`checkout-form-input checkout-form-input-mobile ${errors.mobile && 'checkout-input-error'}`}
                                                    placeholder='Mobile'  {...register('mobile')} />
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