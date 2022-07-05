import React from 'react'
import Authentication from '../../../Authentication'
import './Shop.css'
import ShopCategory from './ShopCategory/ShopCategory'

function Shop() {

    Authentication()

    return (
        <div className="shop-section">
            <div className="shop-section-container">
                <div className="shop-section-main">
                    <ShopCategory
                        title='Custom Cakes'
                        url='products' />
                    <hr className='shop-partition' />
                    {/* <ShopCategory
                        title={titleData[1]}/>
                        <hr className='shop-partition' />
                        <ShopCategory
                        title={titleData[2]}/> */}
                </div>
            </div>
        </div>
    )
}

export default Shop
