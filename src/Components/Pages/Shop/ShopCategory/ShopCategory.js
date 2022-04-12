import React, { useContext, useEffect, useState } from 'react'
import ShopItem from '../ShopItem/ShopItem'
import './ShopCategory.css'
import axios from '../../../../axios'
import { LoadingContext } from '../../../../AppContext'

function ShopCategory(props) {

    const { setLoading } = useContext(LoadingContext)
    const [cakes, setCakes] = useState([])

    useEffect(() => {
        setLoading(true)
        axios.get(props.url, { headers: { "Authorization": localStorage.getItem('token') } })
            .then(res => {
                if (res.data.error) {
                    alert(res.data.message)
                    setLoading(false)
                } else {
                    setCakes(res.data)
                    setLoading(false)
                }
            }).catch(err => {
                console.log(err.message);
                alert(err.message)
                setLoading(false)
            })

        return () => {
            setCakes([])
            setLoading(false)
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
