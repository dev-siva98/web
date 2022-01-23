import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../AppContext'
import axios from '../../../axios'
import './Shop.css'
import ShopCategory from './ShopCategory/ShopCategory'

function Shop() {

    const { setLoggedIn } = useContext(AppContext)

    axios.get('auth', { headers: { "Authorization": localStorage.getItem('token') } })
        .then(res => {
            if (res.data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
            }
        })
        .catch(err => {
            console.log(err);
        })

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
