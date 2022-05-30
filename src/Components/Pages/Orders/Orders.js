import React from 'react'
import './Orders.css'
import OrderItem from './OrderItems/OrderItem'
import Authentication from '../../../Authentication'

function Orders() {

    Authentication()

    return (
        <div>
            <div className="order-section">
                <div className="order-section-container">
                    <h1 className='order-section-header'>My Orders</h1>
                    <div className="order-section-items">
                        <OrderItem />
                        <OrderItem />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
