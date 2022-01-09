import React from 'react'
import './Shop.css'
import ShopCategory from './ShopCategory/ShopCategory'

function Shop() {

    const titleData = [
        'Custom Cakes',
        'Jar Cakes',
        'Pastries'
    ]

    return (
            <div className="shop-section">
                <div className="shop-section-container">
                    <div className="shop-section-main">
                        <ShopCategory 
                        title={titleData[0]}
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
