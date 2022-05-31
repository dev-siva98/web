import React from 'react'
import './OrderItem.css'

function OrderItem({ order }) {
  const createdAt = new Date(order.createdAt).toLocaleString('en-UK', { dateStyle: 'medium', timeStyle: 'short' })
  const delivery = new Date(order.delivery).toLocaleDateString('en-IN', { dateStyle: 'medium' })
  return (
    <div className='order-item-section'>
      <div className="order-item-container">
        <div className="order-item-section-1">
          <h4>Order Id : <span>{order.orderId}</span></h4>
          <h4>Order Date : <span>{createdAt}</span></h4>
        </div>
        <div className="order-item-section-2">
          <h4>&#8377; {order.total}</h4>
        </div>
        <div className="order-item-section-3">
          <h4>Processing</h4>
          <h4>Delivery : <span>{delivery}</span></h4>
        </div>
      </div>
    </div>
  )
}

export default OrderItem