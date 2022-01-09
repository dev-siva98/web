import React from 'react'
import './ShopItem.css'
// import { Placeholder } from 'cloudinary-react'

function ShopItem(props) {

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
                <button className='btn btn-shop'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ShopItem
