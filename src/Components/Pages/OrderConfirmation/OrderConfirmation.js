import React from 'react'

import './OrderConfirmation.css'

function OrderConfirmation() {
    return (
        <div className='confirmation-section'>
            <div className="confirmation-section-container">
                <div className="confirmation-section-left">
                    <div className="confirmation-left-icon">
                        <img src='images/order.png' alt="Success" className='confirmatiom-section-left-image' />
                    </div>
                    <div className="confirmation-left-title">
                        <h2>Order Received</h2>
                        <h5>Order No: FMPP14456787545</h5>
                    </div>
                </div>
                <div className="confirmation-section-right">
                    <div className="confirmation-right-section-1">
                        <h4>Date: 14 May 2022, 08:27:35 PM</h4>
                    </div>
                    <div className="confirmation-right-section-2">
                        <h3>Thank you Siva</h3>
                    </div>
                    <div className="confirmation-right-section-3">
                        <h4>Your Order:</h4>
                        <div className="confirmation-right-section-3-items">

                        </div>
                        <div className="confirmation-right-section-3-paid">

                        </div>
                    </div>
                    <div className="confirmation-right-section-4">
                        <div className="confirmation-right-section-4-payment">
                            <h4>Payment Mode: Online</h4>
                        </div>
                        <div className="confirmation-right-section-4-order">
                            <h4>Order Status: Placed</h4>
                        </div>
                    </div>
                    <div className="confirmation-right-section-5">
                        <h3>Delivery Address:</h3>
                        <h3>Thayyulla Parambil, Koothali</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation