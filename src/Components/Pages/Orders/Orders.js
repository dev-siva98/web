import React, { useContext, useEffect, useState } from 'react'
import './Orders.css'
import OrderItem from './OrderItems/OrderItem'
import Authentication from '../../../Authentication'
import axios from '../../../axios'
import { AppContext, LoadingContext } from '../../../AppContext'
import { Link } from 'react-router-dom'

function Orders() {

    Authentication()
    const [orders, setOrders] = useState([])
    const { loggedIn } = useContext(AppContext)
    const { setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setLoading(true)
        axios.get('getorder', {
            headers: { "Authorization": localStorage.getItem('token') }
        })
            .then(res => {
                console.log(res.data)
                setOrders(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                alert(err.message)
            })
        return () => {
            setOrders([])
            setLoading(false)
        }
    }, [])

    return (
        <div className="order-section">
            <div className="order-section-container">
                <h1 className='order-section-header'>My Orders</h1>
                <div className="order-section-items">
                    {
                        loggedIn ? (
                            orders.length > 0 ?
                                orders.map((order) =>
                                    <OrderItem
                                        key={order._id}
                                        order={order} />
                                ) :
                                <div className='order-section-warning shop'>
                                    You have not ordered anything yet ! <br />
                                    <Link className='order-section-warning-link shop' to={'/shop'}>
                                        Shop
                                    </Link>
                                </div>
                        ) :
                            <div className='order-section-warning'>
                                <Link className='order-section-warning-link' to={'/login'}>
                                    Login
                                </Link>
                                to see orders
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Orders
