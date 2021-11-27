import React, { useState } from 'react'
import './UserLogin.css'

function UserLogin() {

    const [login, setLogin] = useState(false)

    return (
        <div className='login-section'>
            <div className="login-container">
                <div className="login-section-main">
                    <div className={login ? "login-menu-swap right-panel-active" : 'login-menu-swap'} id="container">
                        <div className="form-container sign-up-container">
                            <form action="#">
                                <h1>Create Account</h1>
                                <div className="social-container">
                                    <button>Sign up with Google</button>
                                </div>
                                
                                <span><h2>OR</h2></span>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button>Sign Up</button>
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form action="#">
                                <h1>Sign in</h1>
                                <div className="social-container">
                                    <a href='http://localhost:3000/login' className="social"><i className="fab fa-facebook-f"></i></a>
                                    <a href='http://localhost:3000/login' className="social"><i className="fab fa-google-plus-g"></i></a>
                                    <a href='http://localhost:3000/login' className="social"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <span>or use your account</span>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <a href='http://localhost:3000/login'>Forgot your password?</a>
                                <button>Sign In</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <button className="ghost" id="signIn" onClick={()=>{
                                        setLogin(false)
                                    }}>Sign In</button>
                                </div>
                                
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello, Friend!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <button className="ghost" id="signUp" onClick={()=>{
                                        setLogin(true)
                                    }}>Sign Up</button>
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
