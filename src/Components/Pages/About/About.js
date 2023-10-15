import React from 'react'
import Testimonial from './Testimonial/Testimonial'
import './About.css'
import Authentication from '../../../Authentication';


function About() {

    Authentication()

    return (
        <div className='about-section'>
            <div className="about-section-container">
                <div className="about-section-main">
                    <h1 className='about-header'>About Us</h1>
                    <div className="about-part">
                        <div className="about-part-text">
                            <h2 className='about-part-header'>Who we are</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod quasi explicabo blanditiis totam perspiciatis, fugiat temporibus nam nulla eveniet dignissimos. Esse deserunt libero fugiat. Eius perspiciatis consequuntur fugiat animi?
                            </p>
                        </div>
                        <div className="about-part-image">
                            <img className='about-part-img' src="images/celeb-cake.svg" alt="part" />
                        </div>
                    </div>
                    <div className="about-part part-second">
                        <div className="about-part-text">
                            <h2 className='about-part-header'>What people say</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod quasi explicabo blanditiis totam perspiciatis, fugiat temporibus nam nulla eveniet dignissimos. Esse deserunt libero fugiat. Eius perspiciatis consequuntur fugiat animi?
                            </p>
                        </div>
                        <div className="about-part-image">
                            <img className='about-part-img' src="images/reviews.svg" alt="part" />
                        </div>
                    </div>
                    <div className="testimonial">
                        <Testimonial />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
