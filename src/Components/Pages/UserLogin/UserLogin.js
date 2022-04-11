import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'
import Signin from './Signin'
import Signup from './Signup'
import './UserLogin.css'
import { AppContext } from '../../../AppContext'
// import axios from '../../../axios'

function UserLogin() {

    const [login, setLogin] = useState(false)
    const [mobile, setMobile] = useState(false)
    const value = { mobile, setMobile }
    const {loggedIn, setLoggedIn } = useContext(AppContext)

    // axios.get('auth', { headers: { "Authorization": localStorage.getItem('token') } })
    //     .then(res => {
    //         if (res.data.error) {
    //             setLoggedIn(false)
    //         } else {
    //             setLoggedIn(true)
    //         }
    //     })
    //     .catch(err => {
    //         setLoggedIn(false)
    //         console.log(err);
    //     })

        console.log(loggedIn)

    return (
        <div className='login-section'>
            <div className="login-container">
                <div className="login-section-main">
                    <UserContext.Provider value={value}>
                        <div className={login ? "login-menu-swap right-panel-active" : 'login-menu-swap'}>
                            <div className={mobile ? "form-container sign-up-container  signup-container-swap" : "form-container sign-up-container"}>
                                <Signup />
                            </div>
                            <div className={mobile ? "form-container sign-in-container signin-container-swap" : "form-container sign-in-container "}>
                                <Signin />
                            </div>
                            <div className="overlay-container">
                                <div className="overlay">
                                    <div className="overlay-panel overlay-left">
                                        <h1>Welcome Back!</h1>
                                        <p>To keep connected with us please login with your personal info</p>
                                        <button className="ghost" id="signIn" onClick={() => {
                                            setLogin(false)
                                        }}>SIGN IN</button>
                                    </div>

                                    <div className="overlay-panel overlay-right">
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and order your favorite cake from us</p>
                                        <button className="ghost" id="signUp" onClick={() => {
                                            setLogin(true)
                                        }}>SIGN UP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </UserContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
