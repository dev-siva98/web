import React, { useState } from 'react'
import './UserLogin.css'

function UserLogin() {

    const [login, setLogin] = useState(false)
    const [mobile, setMobile] = useState(false)

    return (
        <div className='login-section'>
            <div className="login-container">
                <div className="login-section-main">
                    <div className={login ? "login-menu-swap right-panel-active" : 'login-menu-swap'}>
                        <div className={mobile ? "form-container sign-up-container  signup-container-swap" : "form-container sign-up-container"}>
                            <form action="#">
                                <h1>Create Account</h1>
                                <div className="social-container">
                                    <button>Sign up with Google</button>
                                </div>

                                <span><h2>OR</h2></span>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="tel" placeholder="Mobile" />
                                <button>SIGN UP</button>
                                <div className="signin-swap">
                                Already have an account ? <span className='swap-link' onClick={()=>setMobile(false)}>Sign-in</span>
                            </div>
                            </form>
                            
                        </div>
                        <div className={mobile ? "form-container sign-in-container signin-container-swap" : "form-container sign-in-container "}>
                            <form action="#">
                                <h1>Sign in</h1>
                                <div className="social-container">
                                    <button >Sign in with Google</button>
                                </div>
                                <span><h2>OR</h2></span>
                                <input type="email" placeholder="Email/Mobile" />
                                <input type="password" placeholder="Password" />
                                <a href='http://localhost:3000/login'>Forgot your password?</a>
                                <button>SIGN IN</button>
                                <div className="signup-swap">
                                New here ? <span className='swap-link' onClick={()=>setMobile(true)}>Sign-up</span>
                            </div>
                            </form>
                            
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
                                    <p>Enter your personal details and start journey with us</p>
                                    <button className="ghost" id="signUp" onClick={() => {
                                        setLogin(true)
                                    }}>SIGN UP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
