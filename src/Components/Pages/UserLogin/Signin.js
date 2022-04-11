import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useForm } from 'react-hook-form'
import axios from '../../../axios';
import { useNavigate } from 'react-router-dom'
import { AppContext, LoadingContext } from '../../../AppContext'

function Signin() {
    const { setLoggedIn } = useContext(AppContext)
    const { setMobile } = useContext(UserContext)
    const { setLoading } = useContext(LoadingContext)
    let navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const handleKeypress = e => {
        if (e.key === 'Enter') {
            setLoading(true)
        }
    };

    const onSubmit = (data) => {
        axios({
            method: 'POST',
            url: 'signin',
            data: data
        })
            .then((response) => {
                if (response.data.error) {
                    setLoading(false)
                    setLoggedIn(false)
                    alert(response.data.message)
                } else {
                    localStorage.setItem('token', 'Bearer ' + response.data.accessToken)
                    localStorage.setItem('user', response.data.user.name)
                    localStorage.setItem('id', response.data.id)
                    setLoggedIn(true)
                    setLoading(false)
                    navigate('/')
                }
            })
            .catch((err) => {
                setLoading(false)
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
                onKeyPress={handleKeypress}
            />
            {errors.password && <p className='error-message'>field required</p>}

            <a href='/login'>Forgot your password?</a>
            <button onClick={() => setLoading(true)} >SIGN IN</button>
            <div className="signup-swap">
                New here ? <span className='swap-link' onClick={() => setMobile(true)}>Sign-up</span>
            </div>
        </form>
    )
}

export default Signin
