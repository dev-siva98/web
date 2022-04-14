import React, { useEffect, useState } from 'react'
import './ShopItem.css'
import { useCart, useDispatchCart } from '../../../Cart/CartProvider'
import axios from '../../../../axios'


function ShopItem(props) {

    const cart = useCart()
    const dispatch = useDispatchCart()
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        cart.map((product) => {
            if (product.proId === props.details.proId) {
                setFlag(true)
            }
        })

        return () => {
            setFlag(false)
        }

    }, [cart]) // eslint-disable-line react-hooks/exhaustive-deps

    const addToCart = (item) => {
        dispatch({
            type: 'ADD_ITEM',
            item: item
        })
        item.quantity = 1
        axios({
            url: 'addtocart',
            method: 'post',
            data: item,
            headers: { "Authorization": localStorage.getItem('token') }
        }).then(res => {
            if (res.data.error) {
                alert(res.data.message)
            }
        })
    }

    const removeFromCart = (item) => {
        dispatch({
            type: 'REMOVE_ITEM',
            item: item
        })
        axios({
            method: 'delete',
            url: 'removefromcart',
            data: item,
            headers: { "Authorization": localStorage.getItem('token') }
        }).then(res => {
            if (res.data.error) {
                alert(res.data.message)
            }
        })
    }

    return (
        <div className="shop-item">
            <div className="shop-item-image">
                <img
                    className='shop-item-img skeleton'
                    src={props.details.image}
                    alt='new'
                >
                </img>
            </div>
            <div className="shop-item-content">
                <h2 className="shop-item-name">
                    {props.details.pname}
                </h2>
                <div className="shop-select-container">
                    {props.details.weight}
                </div>
                <h2>&#8377;{props.details.price}</h2>
                {
                    flag ?
                        <button onClick={() => removeFromCart(props.details)} className='btn btn-shop shop-remove'>Remove item</button>
                        :
                        <button onClick={() => addToCart(props.details)} className='btn btn-shop'>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default ShopItem
