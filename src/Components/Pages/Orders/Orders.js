import React from 'react'
import './Orders.css'
import { SiWhatsapp } from 'react-icons/si'
// import {ImCross} from 'react-icons/im'

function Orders() {
    return (
        <div>
            <div className="order-section">
                <div className="order-section-container">
                    <h1 className='order-section-header'>My Orders</h1>
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
                            <div className="order-item">
                                <div className="order-item-product">
                                    <div className="order-item-image">
                                        <img className='order-item-img' src="images/custom.jpg" alt="item" />
                                    </div>
                                    <div className="order-item-content">
                                        <div className="order-item-details">
                                            <h2 className="order-item-name">
                                                Red velvet
                                            </h2>
                                            <h5>MC101</h5>
                                            <h5>&#8377;600</h5>
                                        </div>
                                        <div className="order-item-quantity">
                                            <h5>1 KG</h5>
                                            <h5>Qty: 2</h5>
                                            <h4>&#8377;1200</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-item-status">
                                    Status <br /><span>In - Transit</span>
                                </div>
                                <div className="order-item-delivery">
                                    Delivery Expected By : <br /><span>26 November 2021</span>
                                </div>
                            </div>
                            <hr className="order-partition" />
                            <div className="order-item">
                                <div className="order-item-product">
                                    <div className="order-item-image">
                                        <img className='order-item-img' src="images/custom.jpg" alt="item" />
                                    </div>
                                    <div className="order-item-content">
                                        <div className="order-item-details">
                                            <h2 className="order-item-name">
                                                Red velvet
                                            </h2>
                                            <h5>MC101</h5>
                                            <h5>&#8377;600</h5>
                                        </div>

                                        <div className="order-item-quantity">
                                            <h5>2 KG</h5>
                                            <h5>Qty: 2</h5>
                                            <h4>&#8377;2400</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-item-status">
                                    Status <br /><span>In - Transit</span>
                                </div>
                                <div className="order-item-delivery">
                                    Delivery Expected By : <br /><span>26 November 2021</span>
                                </div>
                            </div>
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
                            <div className="order-item">
                                <div className="order-item-product">
                                    <div className="order-item-image">
                                        <img className='order-item-img' src="images/custom.jpg" alt="item" />
                                    </div>
                                    <div className="order-item-content">
                                        <div className="order-item-details">
                                            <h2 className="order-item-name">
                                                Red velvet
                                            </h2>
                                            <h5>MC101</h5>
                                            <h5>&#8377;600</h5>
                                        </div>
                                        <div className="order-item-quantity">
                                            <h5>1 KG</h5>
                                            <h5>Qty: 2</h5>
                                            <h4>&#8377;1200</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-item-status">
                                    Status <br /><span>In - Transit</span>
                                </div>
                                <div className="order-item-delivery">
                                    Delivery Expected By : <br /><span>26 November 2021</span>
                                </div>
                            </div>
                            <hr className="order-partition" />
                            <div className="order-item">
                                <div className="order-item-product">
                                    <div className="order-item-image">
                                        <img className='order-item-img' src="images/custom.jpg" alt="item" />
                                    </div>
                                    <div className="order-item-content">
                                        <div className="order-item-details">
                                            <h2 className="order-item-name">
                                                Red velvet
                                            </h2>
                                            <h5>MC101</h5>
                                            <h5>&#8377;600</h5>
                                        </div>

                                        <div className="order-item-quantity">
                                            <h5>2 KG</h5>
                                            <h5>Qty: 2</h5>
                                            <h4>&#8377;2400</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-item-status">
                                    Status <br /><span>In - Transit</span>
                                </div>
                                <div className="order-item-delivery">
                                    Delivery Expected By : <br /><span>26 November 2021</span>
                                </div>
                            </div>
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
            </div>
        </div>
    )
}

export default Orders
