import React from 'react'
import './Orders.css'
import OrderProducts from './OrderProducts/OrderProducts'
import Authentication from '../../../Authentication'

function Orders() {

    Authentication()

    return (
        <div>
            <div className="order-section">
                <div className="order-section-container">
                    <h1 className='order-section-header'>My Orders</h1>
                    <OrderProducts/>
                </div>
            </div>
        </div>
    )
}

export default Orders
