import React, { useState} from 'react'
import './Navbar.css'
import { MdFingerprint } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'
function Navbar() {

    const [click, setClick] = useState(false)
    // const [profile, setProfile] = useState(false)

    const handleClick = () => setClick(!click)
    // }
    // const handleProfile = () => setProfile(true)
    // console.log(profile);
    console.log(click);

    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                        <Link to='/' className='nav-brand'>
                            <MdFingerprint className='nav-icon' />
                            Shop
                        </Link>
                        <div className="navigation">
                   <div className="menu-icon"   onClick={handleClick} >
                        {click ? <BsPersonCircle/> : <FaBars/>}
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-items">
                            <Link to='/' className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/cart' className="nav-link">
                                Cart
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/orders' className="nav-link">
                                Orders
                            </Link>
                        </li>
                        <li  className="nav-items">
                            <Link to='/about' className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li style={{fontSize:'2rem'}} className="nav-items active">
                            <div to='/about' className="nav-link">
                                <BsPersonCircle/>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
