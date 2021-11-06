import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FiChevronRight } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import { GoMail } from 'react-icons/go'
import { IoCall } from 'react-icons/io5'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { GrFacebook } from 'react-icons/gr'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-navigation">
                    {/* get in touch */}

                    <div className="foot-section">
                        <h2 className='foot-header'>Get In Touch</h2>
                        <ul className='foot-menu'>
                            <li className='foot-item'>
                                <MdLocationOn className='icon-location' />
                                <a href='https://goo.gl/maps/A62Xv3LiNdgbPQyH7' className='foot-links'>
                                    Perambra, India
                                </a>
                            </li>
                            <li className='foot-item'>
                                <GoMail className='icon-mail' />
                                <a href='mailto:sivaprasadtppba@gmail.com' className='foot-links'>
                                    info@makemycake.in
                                </a>
                            </li>
                            <li className='foot-item'>
                                <IoCall className='icon-call' />
                                <a href='tel:08086034480' className='foot-links'>
                                    +91 9876543210
                                </a>
                            </li>
                        </ul>
                        <div className="footer-social">
                            <a href="http://facebook.com" target='_blank' rel="noreferrer"><GrFacebook className='footer-social-icons' /></a>
                            <a href="https://youtube.com" target='_blank' rel="noreferrer" ><BsYoutube className='footer-social-icons' /></a>
                            <a href="https://instagram.com" target='_blank' rel="noreferrer"><BsInstagram className='footer-social-icons' /></a>
                            
                        </div>
                    </div>
                    {/* quick links */}
                    <div className="foot-section">
                        <h2 className='foot-header'>Quick Links</h2>
                        <ul className='foot-menu'>
                            <li className='foot-item'>
                                <FiChevronRight />

                                <Link to='/' className='foot-links'>
                                    Home
                                </Link>
                            </li>
                            <li className='foot-item'>
                                <FiChevronRight />
                                <Link to='/about' className='foot-links'>
                                    About us
                                </Link>
                            </li>
                            <li className='foot-item'>
                                <FiChevronRight />
                                <Link to='/what-people-say' className='foot-links'>
                                    What people say
                                </Link>
                            </li>
                            <li className='foot-item'>
                                <FiChevronRight />
                                <Link to='/gallery' className='foot-links'>
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* news letter */}
                    <div className="foot-section">
                        <h2 className='foot-header'>News Letter</h2>
                        <p>Sign up to get notified on new deals and offers from us !!</p>
                        <form action="#" className='foot-form'>
                            <input type="email" className='foot-input' placeholder='E-mail' />
                            <input className='btn btn-blue' type="submit" value='Sign up' />
                        </form>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <div className="bottom-section">
                <p>&copy; MakeMyCake | All Rights Reserved | Designed By <a href="https://instagram.com" style={{color:'#fff'}}>Siva</a></p>
            </div>
        </div>
    )
}

export default Footer