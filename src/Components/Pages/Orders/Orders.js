import React, { useContext } from 'react'
import './Orders.css'
import OrderProducts from '../../InnerPageItems/OrderProducts/OrderProducts'
import { AppContext } from '../../../AppContext'
import axios from '../../../axios'

function Orders() {

    const { setLoggedIn } = useContext(AppContext)

    axios.get('auth', { headers: { "Authorization": localStorage.getItem('token') } })
        .then(res => {
            console.log(res);
            if (res.data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
            }
        })
        .catch(err => {
            console.log(err);
        })

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
