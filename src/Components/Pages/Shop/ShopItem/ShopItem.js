import React from 'react'
import './ShopItem.css'
import { Image, Placeholder } from 'cloudinary-react'

function ShopItem(props) {

    console.log(props.details.image.publicId)

    return (
        <div className="shop-item">
            <div className="shop-item-image">
                {/* <Image
                    className='shop-item-img skeleton'
                    cloud_name='makemycake'
                    publicId={props.details.image.publicId}
                    loading="lazy"
                    >
                    <Placeholder
                        type="vectorize">
                    </Placeholder>
                </Image> */}
                <img className='shop-item-img skeleton' src={props.details.image.url} alt="image loading" />
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
