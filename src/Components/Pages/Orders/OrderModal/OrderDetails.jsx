import React from 'react'
import './OrderDetails.css'
import { Backdrop } from '@mui/material'
import { Close } from '@mui/icons-material'


function OrderDetails({ data, handleShow }) {

    const createdAt = new Date(data.createdAt)
        .toLocaleString('en-IN',
            { dateStyle: 'medium', timeStyle: 'short' })

    const delivery = new Date(data.delivery)
        .toLocaleDateString('en-IN',
            { dateStyle: 'medium' })

    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <div className='order-details'>
                <Close
                    onClick={handleShow}
                    className='order-details-button' />
                <div className="order-details-container">
                    <div className="order-details-item">
                        <span>Order Id </span><span>{data.orderId}</span>
                    </div>
                    <div className="order-details-item">
                        <span>Order Date</span><span>{createdAt}</span>
                    </div>
                    <div className="order-details-item">
                        <span>Name</span><span>{data.userName}</span>
                    </div>
                    <div className="order-details-item">
                        <span>Items Total</span><span>&#8377; {data.cartTotal}</span>
                    </div>
                    {
                        data.couponApplied &&
                        <div className="order-details-item">
                            <span>Coupon Applied</span><span>{data.couponApplied}</span>
                        </div>
                    }
                    {
                        data.discount > 0 &&
                        <div className="order-details-item">
                            <span>Discount</span><span>&#8377; {data.discount}</span>
                        </div>
                    }
                    <div className="order-details-item">
                        <span>Shipping</span><span>&#8377; {data.shipping}</span>
                    </div>
                    <div className="order-details-item">
                        <span>Total</span><span>&#8377; {data.total}</span>
                    </div>
                    <div className="order-details-item">
                        <span>Payment Mode</span><span>{data.paymentMode}</span>
                    </div>
                    <div className="order-details-item">
                        <span>Order Status</span><span className={data.orderStatus} >{data.orderStatus}</span>
                    </div>
                    <div className="order-details-item">
                        <span>Payment Status</span><span className={data.paymentStatus} >{data.paymentStatus}</span>
                    </div>
                    <div className="order-details-item">
                        <span>Delivery Date</span><span>{delivery}</span>
                    </div>
                    <div className="order-details-item">
                        <span>Write on Cake</span><span>{data.write}</span>
                    </div>
                </div>
            </div>
        </Backdrop>
    )
}

export default OrderDetails