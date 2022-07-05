import React, { useEffect, useState } from 'react'
import './ShopItem.css'
import { useCart, useDispatchCart } from '../../../Cart/CartProvider'
import axios from '../../../../axios'
import { Button } from '@mui/material'
import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material'


function ShopItem(props) {

    const cart = useCart()
    const dispatch = useDispatchCart()
    const [flag, setFlag] = useState(false)
    const [cartItem, setCartItem] = useState(false)

    useEffect(() => {
        cart.items.forEach((product) => {
            if (product.proId === props.details.proId) {    //to show remove button
                setFlag(true)
                setCartItem(product)
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
                <h3 className="shop-item-weight">
                    {props.details.weight}
                </h3>
                <h2>&#8377;{props.details.price}</h2>
                {
                    flag ?
                        <Button onClick={() => removeFromCart(cartItem)} className='shop-item-button shop-item-remove'>
                            Remove <RemoveShoppingCart />
                        </Button>
                        :
                        <Button onClick={() => addToCart(props.details)} className='shop-item-button shop-item-add'>
                            Add <AddShoppingCart />
                        </Button>
                }
            </div>
        </div>
    )
}

export default ShopItem
