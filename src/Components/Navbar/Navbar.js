import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { MdFingerprint } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
// import { BsPersonCircle } from 'react-icons/bs'
function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const ref = useRef()

    useEffect(() => {
        const detectClick = e => {
            if (click && ref.current && !ref.current.contains(e.target)) {
                setClick(false)
            }
        }

        document.addEventListener("mousedown", detectClick)

        return () => {
            document.removeEventListener("mousedown", detectClick)
        }
    }, [click])



    return (
        <div>
            <nav className={click ? "navbar active" : "navbar"}>
                <div className="nav-container" ref={ref}>
                    <Link to='/' className='nav-brand'>
                        <MdFingerprint className='nav-icon' />
                        Shop
                    </Link>
                    <div className="navigation" >
                        <div className="menu-icon avatar-mob" onClick={handleClick} >
                            {click ? <img className='avatar' src="images/avatar.png" alt="NA" /> : <FaBars />}
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
                            <li className="nav-items">
                                <Link to='/about' className="nav-link">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-items active">
                                <div to='/about' className="nav-link">
                                <img className='avatar' src="images/avatar.png" alt="NA" />
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
