import React, { useState } from 'react'
import './OrderItem.css'
import OrderDetails from '../OrderModal/OrderDetails'

function OrderItem({ order }) {

  const [show, setShow] = useState(false)

  const createdAt = new Date(order.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
  const delivery = new Date(order.delivery).toLocaleDateString('en-IN', { dateStyle: 'medium' })
  const orderStatus = order.orderStatus

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className='order-item-section'>
      {
        show && <OrderDetails handleShow={handleShow} data={order} />
      }
      <div className="order-item-container"
        onClick={handleShow}
      >
        <div className="order-item-section-1">
          <h4>Order Id : <span>{order.orderId}</span></h4>
          <h4>Order Date : <span>{createdAt}</span></h4>
        </div>
        <div className="order-item-section-2">
          <h4>&#8377; {order.total}</h4>
        </div>
        <div className="order-item-section-3">
          <h3 className={orderStatus}>
            {orderStatus}
          </h3>
          <h4>Delivery : <span>{delivery}</span></h4>
        </div>
      </div>
    </div>
  )
}

export default OrderItem