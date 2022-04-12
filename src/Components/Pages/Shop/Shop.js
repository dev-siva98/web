import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../AppContext'
import axios from '../../../axios'
import './Shop.css'
import ShopCategory from './ShopCategory/ShopCategory'

function Shop() {

    const titleData = [
        'Custom Cakes',
        'Jar Cakes',
        'Pastries'
    ]

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
