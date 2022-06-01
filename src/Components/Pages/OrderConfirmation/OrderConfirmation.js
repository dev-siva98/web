import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'


import './OrderConfirmation.css'

function OrderConfirmation(props) {
    const { state } = useLocation()

    const createdAt = new Date(state.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
    const delivery = new Date(state.delivery).toLocaleDateString('en-IN', { dateStyle: 'medium' })
    return (
        <div className='confirmation-section'>
            <div className="confirmation-section-container">
                <div className="confirmation-section-left">
                    <div className="confirmation-left-icon">
                        <BsFillCartCheckFill className='confirmatiom-section-left-icon' />
                        <div className="confirmation-left-icon-bg"></div>
                    </div>
                    <div className="confirmation-left-title">
                        <h2>Order Received</h2>
                    </div>
                </div>
                <div className="confirmation-section-right">
                    <div className="confirmation-right-section-1">
                        <h5>Ordered on :</h5>
                        <h4>{createdAt}</h4>
                    </div>
                    <div className="confirmation-right-section-2">

                        <h3>Thank you {state.userName}</h3>
                    </div>
                    <div className="confirmation-right-section-3">
                        <h4>Order No: {state.orderId}</h4>
                        <div className="confirmation-right-section-3-paid">
                            Total : <span>&#8377; {state.total}.00</span>
                        </div>
                    </div>
                    <div className="confirmation-right-section-4">
                        <div className="confirmation-right-section-4-payment">
                            <h4>Payment Status: <span>{state.paymentStatus}</span></h4>
                        </div>
                        <div className="confirmation-right-section-4-order">
                            <h4>Order Status: <span>{state.orderStatus}</span></h4>
                        </div>
                    </div>
                    <div className="confirmation-right-section-5">
                        <div className="confirmation-right-section-5-address">
                            <h4>Delivery Address:</h4>
                            <h4>{state.address.address1}<br />
                                {state.address?.address2}<br />
                                Pin: {state.address.pin}
                            </h4>
                        </div>
                        <div className="confirmation-right-section-5-date">
                            <h4>Delievry date :</h4>
                            <h4>{delivery}</h4>
                        </div>
                    </div>
                    <div className="confirmation-right-section-6">
                        <Link to='/orders' >
                            <button className='btn btn-confirmation-action'>My Orders</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation