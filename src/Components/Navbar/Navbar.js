import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import { MdFingerprint } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
// import { BsPersonCircle } from 'react-icons/bs'
function Navbar() {

    const [click, setClick] = useState(false)
    const [drop, setDrop] = useState(false)
    const [open, setOpen] = useState(false)
    // const [login, setLogin] = useState(false)


    const handleClick = () => setClick(!click)

    const ref = useRef()

    useEffect(() => {
        const detectClick = e => {
            if (click && ref.current && !ref.current.contains(e.target)) {
                setClick(false)
            }
            if (drop && ref.current && !ref.current.contains(e.target)) {
                setDrop(false)
            }
        }

        document.addEventListener("mousedown", detectClick)

        return () => {
            document.removeEventListener("mousedown", detectClick)
        }
    }, [click, drop])



    return (
        <div>
            <nav className={click ? "navbar active" : "navbar"}>
                <div className="nav-container" >
                    <Link to='/' className='nav-brand'>
                        <MdFingerprint className='nav-icon' />
                        MakeMyCake
                    </Link>
                    <div className="navigation" >
                        <div className="menu-icon avatar-mob" onClick={handleClick} >
                            {click ? <img className='avatar' src="images/avatar.png" alt="NA" /> : <FaBars />}
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'} ref={ref} >
                            <Link to='/' className="nav-items">
                                <li className="nav-link" onClick={handleClick} >
                                    Home
                                </li>
                            </Link>
                            <Link to='/shop' className="nav-items">
                                <li className="nav-link" onClick={handleClick} >
                                    Shop
                                </li>
                            </Link>
                            <Link to='/cart' className="nav-items">
                                <li className="nav-link" onClick={handleClick} >
                                    Cart
                                </li>
                            </Link>
                            <Link to='/orders' className="nav-items">
                                <li className="nav-link" onClick={handleClick} >
                                    Orders
                                </li>
                            </Link>
                            <Link to='/about' className="nav-items">
                                <li className="nav-link" onClick={handleClick} >
                                    About Us
                                </li>
                            </Link>
                            <li className='nav-items profile-mobile'>
                                <div className="nav-link" onClick={() => setOpen(!open)}>
                                    {open ? 'Logout' : 'Login'}
                                </div>
                            </li>
                            <li className="nav-items active">
                                <div className="nav-link dropdown">
                                    <img className='avatar' src="images/avatar.png" alt="NA" onClick={() => setDrop(!drop)} />
                                    <div className={drop ? "dropdown-content" : 'content-hidden'} onClick={() =>{
                                        setOpen(!open)
                                        }}>
                                        {open ? 'Logout'
                                        : <Link to='/login'>Login</Link>}
                                    </div>
                                    
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
