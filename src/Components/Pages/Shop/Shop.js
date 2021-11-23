import React, { useState } from 'react'
import './Shop.css'
import Select from 'react-select'

function Shop() {


    const options = [
        { value: '500 G', label: '500 G' },
        { value: '1 KG', label: '1 KG' },
        { value: '2 KG', label: '2 KG' },
    ];

    const [select, setSelect] = useState(options[1].value)

    const handleChange = (event) => {
        setSelect(event.value)
    }

    console.log(select);

    return (
        <div>
            <div className="shop-section">
                <div className="shop-section-container">
                    <div className="shop-section-main">
                        <h2>Custom Cakes</h2>
                        <div className="shop-cake-section shop-custom-cake">
                            <div className="shop-item">
                                <div className="shop-item-image">
                                    <img className='shop-item-img' src="images/custom.jpg" alt="cake" />
                                </div>
                                <div className="shop-item-content">
                                    <h2 className="shop-item-name">
                                        Red Velvet
                                    </h2>
                                    <div className="shop-select-container">
                                        <Select
                                            value={select}
                                            onChange={handleChange}
                                            options={options}
                                            placeholder={select}
                                            className='shop-select'
                                        />
                                    </div>
                                    <h2>&#8377;600</h2>
                                    <button className='btn btn-shop'>Add to Cart</button>
                                </div>
                            </div>
                            <div className="shop-item">
                                <div className="shop-item-image">
                                    <img className='shop-item-img' src="images/custom.jpg" alt="cake" />
                                </div>
                                <div className="shop-item-content">
                                    <h2 className="shop-item-name">
                                        Red Velvet
                                    </h2>
                                    <div className="shop-select-container">
                                        <Select
                                            value={select}
                                            onChange={handleChange}
                                            options={options}
                                            placeholder={select}
                                            className='shop-select'
                                        />
                                    </div>
                                    <h2>&#8377;600</h2>
                                    <button className='btn btn-shop'>Customize</button>
                                </div>
                            </div>
                            <div className="shop-item">
                                <div className="shop-item-image">
                                    <img className='shop-item-img' src="images/custom.jpg" alt="cake" />
                                </div>
                                <div className="shop-item-content">
                                    <h2 className="shop-item-name">
                                        Red Velvet
                                    </h2>
                                    <div className="shop-select-container">
                                        <Select
                                            value={select}
                                            onChange={handleChange}
                                            options={options}
                                            placeholder={select}
                                            className='shop-select'
                                        />
                                    </div>
                                    <h2>&#8377;600</h2>
                                    <button className='btn btn-shop'>Customize</button>
                                </div>
                            </div>
                        </div>
                        <hr className='shop-partition' />
                        <h2>Jar Cake</h2>
                        <div className="shop-cake-section shop-custom-cake">
                            <div className="shop-item">
                                <div className="shop-item-image">
                                    <img className='shop-item-img' src="images/custom.jpg" alt="cake" />
                                </div>
                                <div className="shop-item-content">
                                    <h2 className="shop-item-name">
                                        Red Velvet
                                    </h2>
                                    <h2>&#8377;600</h2>
                                    <button className='btn btn-shop'>Customize</button>
                                </div>
                            </div>
                            <div className="shop-item">
                                <div className="shop-item-image">
                                    <img className='shop-item-img' src="images/custom.jpg" alt="cake" />
                                </div>
                                <div className="shop-item-content">
                                    <h2 className="shop-item-name">
                                        Red Velvet
                                    </h2>
                                    <h2>&#8377;600</h2>
                                    <button className='btn btn-shop'>Customize</button>
                                </div>
                            </div>
                            <div className="shop-item">
                                <div className="shop-item-image">
                                    <img className='shop-item-img' src="images/custom.jpg" alt="cake" />
                                </div>
                                <div className="shop-item-content">
                                    <h2 className="shop-item-name">
                                        Red Velvet
                                    </h2>
                                    <h2>&#8377;600</h2>
                                    <button className='btn btn-shop'>Customize</button>
                                </div>
                            </div>
                        </div>
                        <hr className='shop-partition' />
                        <h2>Pastries</h2>
                        <div className="shop-cake-section shop-custom-cake">
                            <div className="shop-item">
                                <div className="shop-item-image">
                                    <img className='shop-item-img' src="images/custom.jpg" alt="cake" />
                                </div>
                                <div className="shop-item-content">
                                    <h2 className="shop-item-name">
                                        Red Velvet
                                    </h2>
                                    <h2>&#8377;600</h2>
                                    <button className='btn btn-shop'>Customize</button>
                                </div>
                            </div>
                            <div className="shop-item">
                                <div className="shop-item-image">
                                    <img className='shop-item-img' src="images/custom.jpg" alt="cake" />
                                </div>
                                <div className="shop-item-content">
                                    <h2 className="shop-item-name">
                                        Red Velvet
                                    </h2>
                                    <h2>&#8377;600</h2>
                                    <button className='btn btn-shop'>Customize</button>
                                </div>
                            </div>
                            <div className="shop-item">
                                <div className="shop-item-image">
                                    <img className='shop-item-img' src="images/custom.jpg" alt="cake" />
                                </div>
                                <div className="shop-item-content">
                                    <h2 className="shop-item-name">
                                        Red Velvet
                                    </h2>
                                    <h2>&#8377;600</h2>
                                    <button className='btn btn-shop'>Customize</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop
