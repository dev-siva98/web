import React, { useState, useEffect, useRef, useContext } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { AppContext } from '../../AppContext'
import { useCart, useDispatchCart } from '../Cart/CartProvider'



function Navbar(props) {
    const cart = useCart()
    const dispatch = useDispatchCart()
    const [click, setClick] = useState(false)
    const { loggedIn, setLoggedIn } = useContext(AppContext)
    const [drop, setDrop] = useState(false)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => setClick(!click)

    const handleLogout = () => {
        const confirmBox = window.confirm(
            "Do you really want to Logout?"
        )
        if (confirmBox === true) {
            setDrop(!drop)
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('id')
            // dispatch({
            //     type: 'CLEAR_CART'
            // })
        }
        navigate('/login')
    }

    const ref = useRef()

    console.log(cart, "Hwey")
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
                            {click ?
                                <img className='avatar'
                                    src={loggedIn ?
                                        `https://ui-avatars.com/api/?name=${props?.user}&length=1&background=random&bold=true`
                                        : 'images/avatar.png'}
                                    alt="NA" />
                                : <FaBars />}
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
                                    Cart {cart.items?.length > 0 ? cart.items.length : undefined}
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
                                <div className="nav-link" onClick={() => {
                                    setOpen(!open)
                                    handleClick()
                                }}>
                                    {loggedIn ? <div onClick={handleLogout}>Logout</div>
                                        : <Link to='/login' onClick={() => {
                                            setDrop(!drop)
                                            handleClick()
                                        }}>Login</Link>}
                                </div>
                            </li>
                            <li className="nav-items active">
                                <div className="nav-link dropdown">
                                    <img className='avatar'
                                        src={loggedIn ?
                                            `https://ui-avatars.com/api/?name=${props.user}&length=1&background=random&bold=true`
                                            : 'images/avatar.png'}
                                        alt="NA" onClick={() => setDrop(!drop)} />
                                    <div className={drop ? "dropdown-content" : 'content-hidden'} onClick={() => {
                                        setOpen(!open)
                                    }}>
                                        {loggedIn ? <div onClick={handleLogout}>Logout</div>
                                            : <Link to='/login' onClick={() => setDrop(!drop)}>Login</Link>}
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
