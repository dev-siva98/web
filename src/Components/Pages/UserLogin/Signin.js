import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useForm } from 'react-hook-form'
import axios from '../../../axios';
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../../AppContext'

function Signin() {
    const {setLoggedIn} = useContext(AppContext)
    const { setMobile } = useContext(UserContext)
    let history = useHistory()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        axios({
            method: 'POST',
            url: 'signin',
            data: data
        })
            .then((response) => {
                if (response.data.error) {
                    setLoggedIn(false)
                    alert(response.data.message)
                } else {
                    localStorage.setItem('token', 'Bearer ' + response.data.accessToken)
                    localStorage.setItem('user', response.data.user.name)
                    localStorage.setItem('id' , response.data.id)
                    setLoggedIn(true)
                    alert('Success')
                    history.push('/')
                }
            })
            .catch((err) => {
                alert('Something went wrong')
                console.log(err)
            })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <h1>Sign in</h1>
            <div className="social-container">
                <button>Sign in with Google</button>
            </div>
            <span><h2>OR</h2></span>

            <input type="tel" placeholder="Mobile"
                pattern="^[0-9]{10,10}$"
                {...register('mobile', { required: true })}
                className={errors.mobile && 'input-error'}
            />
            {errors.mobile && <p className='error-message'>field required</p>}

            <input type="password" placeholder="Password"
                {...register('password', { required: true })}
                className={errors.password && 'input-error'}
            />
            {errors.password && <p className='error-message'>field required</p>}

            <a href='/login'>Forgot your password?</a>
            <button>SIGN IN</button>
            <div className="signup-swap">
                New here ? <span className='swap-link' onClick={() => setMobile(true)}>Sign-up</span>
            </div>
        </form>
    )
}

export default Signin
