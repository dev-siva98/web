import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'

import './OrderConfirmation.css'

function OrderConfirmation() {
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
                        <h4>12 Apr 2022, 08:27:35 PM</h4>
                    </div>
                    <div className="confirmation-right-section-2">
                        <h3>Thank you Siva</h3>
                    </div>
                    <div className="confirmation-right-section-3">
                        <h4>Order No: FMPP14456787545</h4>
                        <div className="confirmation-right-section-3-paid">
                            Total : <span>&#8377; 1200.00</span>
                        </div>
                    </div>
                    <div className="confirmation-right-section-4">
                        <div className="confirmation-right-section-4-payment">
                            <h4>Payment Mode: <span>Online</span></h4>
                        </div>
                        <div className="confirmation-right-section-4-order">
                            <h4>Order Status: <span>Placed</span></h4>
                        </div>
                    </div>
                    <div className="confirmation-right-section-5">
                        <div className="confirmation-right-section-5-address">
                            <h4>Delivery Address:</h4>
                            <span>Thayyulla Parambil, Koothali</span>
                        </div>
                        <div className="confirmation-right-section-5-date">
                            <h4>Delievry date :</h4>
                            <span>14-Apr-2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation