import React from 'react'
import './OrderItem.css'

function OrderItem() {
  return (
    <div className='order-item-section'>
      <div className="order-item-container">
        <div className="order-item-section-1">
          <h4>Order Id : <span>MCPP1656789927</span></h4>
          <h4>Order Date : <span>29/5/2022 02:32:34 PM</span></h4>
        </div>
        <div className="order-item-section-2">
          <h4>&#8377; 3600</h4>
        </div>
        <div className="order-item-section-3">
          <h4>Processing</h4> 
          <h4>Delivery : <span>30 May 2022</span></h4>
        </div>
      </div>
    </div>
  )
}

export default OrderItem