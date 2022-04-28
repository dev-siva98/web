import React, { useEffect, useState } from 'react';
import './OrderItem.css';
import axios from '../../../../axios';

function OrderItem(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setData(response.data)
        })
    }, [props.url])

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
                                {data.name}
                            </h2>
                            <h5>{data.code}</h5>
                            <h5>&#8377;{data.price}</h5>
                        </div>
                        <div className="order-item-quantity">
                            <h5>{data.weight}</h5>
                            <h5>Qty:{data.quantity}</h5>
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
        </div>
    )
}

export default OrderItem
