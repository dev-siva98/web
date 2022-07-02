import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from '../../../axios';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaShippingFast } from 'react-icons/fa'
import { GoVerified, GoUnverified } from 'react-icons/go'
import { useCart, useDispatchCart } from '../../Cart/CartProvider';
import Authentication from '../../../Authentication';
import { LoadingContext } from '../../../AppContext';
import './Checkout.css'
import CapturePayment from '../../../CapturePayment';

function loadRazorpay() {
    return new Promise(resolve => {
        console.log('loadRazorpay')
        const script = document.createElement('script')
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

function Checkout() {

    const [verify, setVerify] = useState()
    const [otp, setOtp] = useState()
    const [verified, setVerified] = useState(false)
    const [unVerified, setUnVerified] = useState(false)
    const [loader, setLoader] = useState(false)
    const [paymentMode, setPaymentMode] = useState(true)
    const cart = useCart()
    const { setLoading } = useContext(LoadingContext)
    const dispatch = useDispatchCart()
    const navigate = useNavigate()

    Authentication()

    const verifyPayment = (payment, order) => {
        setLoading(true)
        axios({
            method: 'post',
            url: 'verifypayment',
            data: {
                payment: payment,
                order: order
            },
            headers: { "Authorization": localStorage.getItem('token') }
        }).then(res => {
            dispatch({
                type: 'CLEAR_CART'
            })
            console.log("haii this", res.data)
            alert('Order Placed')
            setLoading(false)
            navigate('/confirmation', { state: res.data })
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    const onFailure = (details, order) => {
        setLoading(true)
        axios({
            method: 'post',
            url: 'failedtransaction',
            data: {
                error: details.error,
                order: order
            },
            headers: { "Authorization": localStorage.getItem('token') }
        }).then(res => {
            dispatch({
                type: 'CLEAR_CART'
            })
            console.log("haii this", res.data)
            setLoading(false)
            CapturePayment({ payment: details.error.metadata.payment_id, order: order })
            navigate('/orders')
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    const displayRazorpay = async (order, data) => {
        console.log('displayRazorpay')
        const res = await loadRazorpay()
        setLoading(false)
        if (!res) {
            alert('Payment Gateway loading error')
            return
        }
        console.log('loaded')
        var options = {
            "key": "rzp_test_JttBO92oxOBmPw",
            "amount": order.amount,
            "currency": "INR",
            "name": "Make My Cake",
            "description": "Make transaction to order cake",
            "order_id": order.id,
            "handler": function (response) {
                console.log(response)
                verifyPayment(response, order)
            },
            "modal": {
                "ondismiss": function () {
                    navigate('/orders')
                }
            },
            "prefill": {
                "name": data.userName,
                "email": "some@gmail.com",
                "contact": '+91' + data.address.contact
            },
            "notes": {
                "address": "Make My Cake, Perambra"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new window.Razorpay(options);
        rzp1.open()
        rzp1.on('payment.failed', function (response) {
            onFailure(response, order)
        });
    }



    const formSchema = Yup.object().shape({
        delivery: Yup.string()
            .required('Provide delivery date expected'),
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
        setLoading(true)
        const payload = {
            userName: localStorage.getItem('user'),
            cartTotal: cart.cartTotal,
            couponApplied: '',
            discount: 0,
            shipping: cart.shipping,
            total: cart.total,
            paymentMode: data.payment,
            write: data.write,
            delivery: data.delivery,
            mobile: data.mobile,
            address: {
                address1: data.address1,
                address2: data.address2,
                landmark: data.landmark,
                pin: data.pincode,
                contact: data.contact
            },
            products: cart.items
        }
        axios({
            method: 'post',
            url: 'checkout',
            data: payload,
            headers: { "Authorization": localStorage.getItem('token') }
        }).then(res => {
            if (res.data.error) {
                alert(res.data.message)
                setLoading(false)
            } else {
                if (data.payment === 'online') {
                    displayRazorpay(res.data, payload)
                } else {
                    dispatch({
                        type: 'CLEAR_CART'
                    })
                    axios.get('clearcart', {
                        headers: { "Authorization": localStorage.getItem('token') }
                    })
                        .catch(err => {
                            alert('' + err)
                        })
                    alert('Order Placed')
                    navigate('/confirmation', { state: res.data })
                    setLoading(false)
                }
            }
        }).catch(err => {
            alert(err.message)
            setLoading(false)
        })
    }

    const handleOtp = () => {
        if (otp === '123456') {
            setVerified(true)
            setUnVerified(false)
            setLoader(false)
        } else {
            setUnVerified(true)
            setVerified(false)
            setLoader(false)
        }
    }

    const handleGetOtp = () => {
        setUnVerified(false)
        setVerified(false)
        setLoader(false)
        setVerify(null)
    }

    useEffect(() => {
        if (verify === 6) {
            setLoader(true)
            setTimeout(handleOtp, 5000)
        } else {
            setVerified(false)
            setUnVerified(false)
            setLoader(false)
        }
    }, [verify])



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
                                        <div className="checkout-form-section-full checkout-form-input-delivery">
                                            <h4>Write On Cake : </h4>
                                            <input type="text" placeholder='Write on cake' {...register('write')}
                                                className="checkout-form-input checkout-input-write" />
                                        </div>
                                        <div className="checkout-form-section-full checkout-form-input-delivery">
                                            <h4>Delivery date expected : </h4>
                                            <input type="date" {...register('delivery', { required: true })}
                                                className={`checkout-form-input checkout-input-date ${errors.delivery && 'checkout-input-error'}`} />
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
                                                    <label type='button' className={`btn btn-checkout-payment-mode pay-online ${paymentMode ? 'active' : ''}`}
                                                        onClick={() => setPaymentMode(true)} > Pay now Online
                                                        <input type="radio" name="payment" value="online" defaultChecked {...register('payment', { required: true })} />
                                                    </label>
                                                </div>
                                                <div className='checkout-form-payment-section' >
                                                    <label type='button' className={`btn btn-checkout-payment-mode ${paymentMode ? '' : 'active'}`}
                                                        onClick={() => setPaymentMode(false)} >Cash on Delivery
                                                        <input type="radio" name="payment" value="cod" {...register('payment', { required: true })} />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-form-section">
                                            <div className="checkout-form-section-1">
                                                <input disabled={paymentMode || loader || verified} type="tel"
                                                    className={`checkout-form-input checkout-form-input-mobile ${errors.mobile && 'checkout-input-error'}`}
                                                    placeholder='Mobile'  {...register('mobile')} />
                                            </div>
                                            <button disabled={paymentMode || loader || verified} type='button' className="btn btn-checkout-mobile-verification"
                                                onClick={() => handleGetOtp()}>Get OTP</button>
                                            <div className="checkout-form-section-2">
                                                <input disabled={paymentMode || loader || verified} type="otp"
                                                    className={`checkout-form-input checkout-form-input-small ${verified && 'verified'} ${unVerified && 'unverified'} `}
                                                    placeholder='OTP'
                                                    onChange={(e) => {
                                                        setVerify(e.target.value.length)
                                                        setOtp(e.target.value)
                                                    }}
                                                />
                                                {verified && <GoVerified className='checkout-otp-verification' />}
                                                {unVerified && <GoUnverified className='checkout-otp-verification unverified' />}
                                                {loader && <div className='checkout-otp-verify-loader' />}
                                            </div>
                                        </div>
                                        <div className="checkout-submit-button">
                                            {paymentMode ?
                                                <button type="submit" className="btn btn-checkout-submit" >
                                                    PAY &#8377; {cart.total}.00</button>
                                                :
                                                <button type="submit" className="btn btn-checkout-submit" disabled={!paymentMode && !verified}>
                                                    PLACE ORDER</button>
                                            }
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