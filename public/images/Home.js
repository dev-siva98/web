import React from 'react'
import './Home.css'

function Home() {
    return (
        <div>
            <div className="home-section">
                <div className="home-container">
                    <div className="home-section-main">
                        <div className="home-section-content">
                            <h1 className='home-header'>
                                We Bake Memories
                            </h1>
                            <p>
                                Delicious Home Made Treat...<br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse optio mollitia, maxime in hic sequi quidem magni voluptatum, corrupti dicta labore voluptates animi ipsum!
                            </p>
                        </div>
                        <div className="home-section-image">
                            <img className='svg-home' src="images/birthday.svg" alt="Hey" />
                        </div>
                    </div>
                    <div className="home-section-explore">
                        <h2 className='explore-section-header'>Explore Our Cakes</h2>
                        <div className='cake-section'>
                            <div className="cake-category">
                                <img src="images/custom.jpg" alt="1" className='explore-image' />
                            </div>
                            <div className="cake-category">
                                <img src="images/jar.jpg" alt="2" className='explore-image' />
                            </div>
                            <div className="cake-category">
                                <img src="images/pastry.jpg" alt="3" className='explore-image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
