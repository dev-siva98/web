import React, { useEffect, useState } from 'react'
import ShopItem from '../ShopItem/ShopItem'
import './ShopCategory.css'
import axios from '../../../../axios'

function ShopCategory(props) {


    const [cakes, setCakes] = useState([])

    useEffect(() => {
        axios.get(props.url, { headers: { "Authorization": localStorage.getItem('token') } })
            .then(res => {
                if(res.data.error){
                    alert(res.data.message)
                }else {
                    setCakes(res.data)
                }
            }).catch(err => {
                console.log(err.message);
                alert(err.message)
            })

            return () => {
                setCakes([])
            }
    }, [props.url])

    return (
        <div>
            <h2>{props.title}</h2>
            <div className="shop-cake-section">
                {cakes.map((cake) =>
                    <ShopItem
                        key={cake._id}
                        details={cake} />
                )}
            </div>
        </div>
    )
}

export default ShopCategory
