import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='admin-section'>
            <div className="admin-section-container">
                <form>
                    <input type="text" name='user' />
                    <input type="password" name='password' />
                    <Link to='/admin/addproduct'>
                        <button>Login</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login