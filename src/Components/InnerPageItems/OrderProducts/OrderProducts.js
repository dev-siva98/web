import React from 'react'
import './OrderProducts.css'
import {SiWhatsapp} from 'react-icons/si'
import OrderItem from '../OrderItem/OrderItem'

function OrderProducts(props) {
    return (
        <div>
            <div className="order-section-main">
                        <div className="order-header">
                            <div className="order-header-part1">
                                <div className="order-header-number">
                                    Order <span>#MCPP8765478990</span>
                                </div>
                                <div className="order-header-details">
                                    Order Placed: Wed, 24 Nov 2021
                                </div>
                            </div>
                            <div className="order-header-part2">
                                <div className="order-header-track">
                                    <SiWhatsapp className='order-header-svg' />
                                    <h4>TRACK ORDER</h4>
                                </div>
                            </div>
                        </div>
                        <hr className="order-main-partition" />
                        <div className="order-items-container">
                            <OrderItem url='orders'/>
                        </div>
                        <hr className="order-main-partition" />
                        <div className="order-footer">
                            <div className="order-footer-cancel">
                                <h4>Cancel Order</h4>
                            </div>
                            <div className="order-footer-address">
                                Address: <br /><span>Myhouse adress <br />at somewhere <br />in the world</span>
                            </div>
                            <div className="order-footer-payment">
                                Payment : <span>COD</span>
                            </div>
                            <div className="order-footer-total">
                                &#8377;3600
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default OrderProducts
