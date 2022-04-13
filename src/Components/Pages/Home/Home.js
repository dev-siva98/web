import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Authentication from '../../../Authentication'
import './Home.css'

function Home() {

    Authentication()


    return (
        <div>
            <div className="home-section">
                <div className="home-container">
                    <div className="home-section-main">
                        <div className="home-section-main-content">
                            <h1 className='home-main-header'>
                                We Bake Memories
                            </h1>
                            <p>
                                Delicious Home Made Treat...<br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse optio mollitia, maxime in hic sequi quidem magni voluptatum, corrupti dicta labore voluptates animi ipsum!
                            </p>
                        </div>
                        <div className="home-section-main-image">
                            <img className='home-main-svg' src="images/birthday.svg" alt="Hey" />
                        </div>
                    </div>
                    <div className="home-section-explore">
                        <h2 className='explore-section-header'>Explore Our Cakes</h2>
                        <div className='cake-section'>
                            <div className="cake-category">
                                <img src="images/custom.jpg" alt="1" className='explore-image' />
                                <h2 className='cake-header'>Custom Cakes</h2>
                                <p className='cake-description' >Customized cakes for Birthday,Anniversary,Wedding etc...</p>
                                <Link to='/shop'>
                                    <button className='btn btn-outline orange'>Explore</button>
                                </Link>
                            </div>
                            <div className="cake-category">
                                <img src="images/jar.jpg" alt="2" className='explore-image' />
                                <h2 className='cake-header'>Jar Cakes</h2>
                                <p className='cake-description' >Comes in 5 different flavours-Order together or wait for notifications to order single...</p>
                                <Link to='/shop'>
                                    <button className='btn btn-outline orange'>Explore</button>
                                </Link>
                            </div>
                            <div className="cake-category">
                                <img src="images/pastry.jpg" alt="3" className='explore-image' />
                                <h2 className='cake-header'>Pastries</h2>
                                <p className='cake-description'>Delicious fresh pastries are available now- Order your favorite cupcakes and brownies...</p>
                                <Link to='/shop'>
                                    <button className='btn btn-outline orange'>Explore</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
