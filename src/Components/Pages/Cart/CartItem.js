import React, { useEffect, useState } from 'react'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { useCart, useDispatchCart } from '../../Cart/CartProvider'
import axios from '../../../axios'
import './Cart.css'


function CartItem({ product }) {

    const dispatch = useDispatchCart()
    const cart = useCart()
    const [item, setItem] = useState(product.quantity)

    useEffect(() => {
        cart.items.forEach(prod => {
            if (prod.proId === product.proId) {
                setItem(prod.quantity)
            }
        })
        return () => {
            setItem([])
        }
    }, [cart])

    const handleDecrement = (product) => {
        if (product.quantity > 1) {
            dispatch({
                type: 'DECREMENT',
                item: product
            })
            axios({
                method: 'post',
                url: 'quantitydecrement',
                data: product,
                headers: { "Authorization": localStorage.getItem('token') }
            }).then(res => {
                if (res.data.error) {
                    alert(res.data.message)
                }
            }).catch(err => {
                alert(err.message)
            })
        } else {
            handleRemove(product)
        }
    }

    const handleIncrement = (product) => {
        dispatch({
            type: 'INCREMENT',
            item: product
        })
        axios({
            method: 'post',
            url: 'quantityincrement',
            data: product,
            headers: { "Authorization": localStorage.getItem('token') }
        }).then(res => {
            if (res.data.error) {
                alert(res.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
    }

    const handleRemove = (product) => {
        const confirmBox = window.confirm(`Do you want to remove ${product.pname} ?`)
        if (confirmBox === true) {
            dispatch({
                type: 'REMOVE_ITEM',
                item: product
            })

            axios({
                method: 'delete',
                url: 'removefromcart',
                data: product,
                headers: { "Authorization": localStorage.getItem('token') }
            }).then(res => {
                if (res.data.error) {
                    alert(res.data.message)
                }
            })
        }
    }

    return (
        <>
            <div className="cart-left-contents">
                <div className="cart-left-product">
                    <div className="cart-product-image">
                        <img src={product.image}
                            alt="cake" className="cart-product-img" />
                    </div>
                    <div className="cart-product-details">
                        <h2>{product.pname}</h2>
                        <h3>{product.weight}</h3>
                        <h3>{product.proId}</h3>
                        <h3>&#8377;{product.price}</h3>
                    </div>
                </div>
                <div className="cart-left-qty">
                    <AiFillMinusSquare className='cart-qty-dec' onClick={() => handleDecrement(product)} />
                    <input type="text" className='cart-qty-value' value={item} disabled />
                    <AiFillPlusSquare className='cart-qty-inc' onClick={() => handleIncrement(product)} />
                </div>
                <div className="cart-left-price">
                    <h2>&#8377;{item * product.price}</h2>
                </div>
                <div className="cart-left-button">
                    <IconButton
                        className='btn-cart-remove'
                        onClick={() => handleRemove(product)}>
                        <Delete />
                    </IconButton>
                </div>
            </div>
            <hr className='cart-item-seperation' />
        </>
    )
}

export default CartItem