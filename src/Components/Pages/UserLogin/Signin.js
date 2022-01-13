import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useForm } from 'react-hook-form'
import axios from '../../../axios';

function Signin() {

    const { setMobile } = useContext(UserContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        axios({
            method :'POST',
            url:'signin',
            data:data
        })
        .then((response)=>{
            alert(response)
        })
        .catch((err)=>{
            alert(err)
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign in</h1>
            <div className="social-container">
                <button>Sign in with Google</button>
            </div>
            <span><h2>OR</h2></span>
            <input type="email" placeholder="Email/Mobile"
                {...register('email', { required: true })}
                className={errors.email && 'input-error'}
            />
            {errors.email && <p className='error-message'>field required</p>}
            <input type="password" placeholder="Password"
                {...register('password', { required: true })}
                className={errors.password && 'input-error'}
            />
            {errors.password && <p className='error-message'>field required</p>}
            <a href='http://localhost:3000/login'>Forgot your password?</a>
            <button>SIGN IN</button>
            <div className="signup-swap">
                New here ? <span className='swap-link' onClick={() => setMobile(true)}>Sign-up</span>
            </div>
        </form>
    )
}

export default Signin
