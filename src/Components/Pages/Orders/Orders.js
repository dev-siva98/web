import React, { useContext, useEffect } from 'react'
import './Orders.css'
import OrderProducts from '../../InnerPageItems/OrderProducts/OrderProducts'
import { AppContext } from '../../../AppContext'
import axios from '../../../axios'

function Orders() {

    const { setLoggedIn } = useContext(AppContext)

    useEffect(() => {
        console.log('auth-nav')
        axios.get('auth', { headers: { "Authorization": localStorage.getItem('token') } })
        .then(res => {
            if (res.data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
            }
        })
        .catch(err => {
            setLoggedIn(false)
            console.log(err);
        })    
    },[])

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
