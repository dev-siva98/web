import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Testimonial.css'
import {Carousel} from 'react-responsive-carousel'

function Testimonial() {
    return (
        <div>
            <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                        >
                            <div className='testimonial-container'>
                                <img className='testimonial-image' src="images/anagha.jpg" alt='1' />
                                <div className="myCarousel">
                                    <h3>Shirley Fultz</h3>
                                    <h4>Designer</h4>
                                    <p>
                                        It's freeing to be able to catch up on customized news and not be
                                        distracted by a social media element on the same site
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img className='testimonial-image' src="images/anagha.jpg" alt='1' />
                                <div className="myCarousel">
                                    <h3>Shirley Fultz</h3>
                                    <h4>Designer</h4>
                                    <p>
                                        It's freeing to be able to catch up on customized news and not be
                                        distracted by a social media element on the same site
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img className='testimonial-image' src="images/anagha.jpg" alt='1' />
                                <div className="myCarousel">
                                    <h3>Shirley Fultz</h3>
                                    <h4>Designer</h4>
                                    <p>
                                        It's freeing to be able to catch up on customized news and not be
                                        distracted by a social media element on the same site
                                    </p>
                                </div>
                            </div>
                        </Carousel>
        </div>
    )
}

export default Testimonial
