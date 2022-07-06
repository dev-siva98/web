import React from 'react'
import './MoreDetails.css'
import { Backdrop } from '@mui/material'
import { Close } from '@mui/icons-material'

function MoreDetails({ data, handleDetails }) {

    console.log(data)

    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}>
            <div className="order-more-details-container">
                <Close
                    onClick={handleDetails}
                    className='order-details-button' />
                <div className="order-more-details">
                    <div className="order-more-details-section-1">
                        <span className='order-more-details-header'>Products</span>
                        <div className='order-more-details-products-container'>
                            {
                                data.products.map(item => {
                                    return (
                                        <div
                                            key={data.orderId}
                                            className="order-more-details-product" >
                                            <span>{item.pname}</span>
                                            <span>{item.weight}</span>
                                            <span>&#8377; {item.price}</span>
                                            <span><span>Qty: </span>{item.quantity}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="order-more-details-section-2">
                        <span className='order-more-details-header'>
                            Address
                        </span>
                        <div className="order-more-details-address-container">
                            <span>{data.address.address1}</span>
                            <span>{data.address.address2}</span>
                            <span>{data.address.landmark}</span>
                            <span><span>Pin: </span>{data.address.pin}</span>
                            <span><span>Mob: </span>{data.address.contact}</span>
                        </div>
                    </div>
                </div>
            </div>

        </Backdrop >
    )
}

export default MoreDetails