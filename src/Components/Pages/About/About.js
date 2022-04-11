import React, { useContext } from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import './About.css'
// import axios from '../../../axios';
// import { AppContext } from '../../../AppContext'
import Loader from '../../Loader/Loader';


function About() {

    // const { setLoggedIn } = useContext(AppContext)

    // axios.get('auth', { headers: { "Authorization": localStorage.getItem('token') } })
    //     .then(res => {
    //         if (res.data.error) {
    //             setLoggedIn(false)
    //         } else {
    //             setLoggedIn(true)
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

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
                            <img className='about-part-img large' src="images/celeb-cake.svg" alt="part" />
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
                        <Loader/>
                    </div>
                    <div className="meet-team">
                        <h2>Meet Our Team</h2>
                        <div className="meet-team-container">
                            <div className='team-part'>
                                <img className='team-image' src="images/anagha.jpg" alt="" />
                                <h3 className='team-name'>Anagha</h3>
                            </div>
                            <div className='team-part'>
                                <img className='team-image' src="images/rakendu.jpg" alt="" />
                                <h3 className='team-name'>Rakendu</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
