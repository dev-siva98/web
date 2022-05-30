import React from 'react';
import './OrderProduct.css';

function OrderProduct(props) {

    return (
        <div>
            <div className="order-item">
                <div className="order-item-product">
                    <div className="order-item-image">
                        <img className='order-item-img' src="images/custom.jpg" alt="item" />
                    </div>
                    <div className="order-item-content">
                        <div className="order-item-details">
                            <h2 className="order-item-name">
                                Red Velvet
                            </h2>
                            <h5>CC1203</h5>
                            <h5>&#8377; 1200</h5>
                        </div>
                        <div className="order-item-quantity">
                            <h5>2 KG</h5>
                            <h5>Qty: 3</h5>
                            <h4>&#8377;3600</h4>
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
    )
}

export default OrderProduct
