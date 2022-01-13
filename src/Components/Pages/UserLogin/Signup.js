import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useForm } from 'react-hook-form'
import axios from '../../../axios';

function Signup() {

    const { setMobile } = useContext(UserContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        axios({
            method:'POST',
            url:'signup',
            data:data
        })
        .then((response)=>{
            alert(response)
        })
        .catch((err)=>{
            alert(err)
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Create Account</h1>
            <div className="social-container">
                <button>Sign up with Google</button>
            </div>
            <span><h2>OR</h2></span>
            <input type="text" placeholder="Name" {...register('name', { required: true })}
            className={errors.name && 'input-error'}
            />
            {errors.name && <p className='error-message'>field required</p>}
            <input type="email" placeholder="Email" {...register('email', { required: true })}
            className={errors.email && 'input-error'}
            />
            {errors.email && <p className='error-message'>field required</p>}
            <input type="tel" placeholder="Mobile" {...register('mobile', { required: true })}
            className={errors.mobile && 'input-error'}
            />
            {errors.mobile && <p className='error-message'>field required</p>}
            <button>SIGN UP</button>
            <div className="signin-swap">
                Already have an account ? <span className='swap-link' onClick={() => setMobile(false)}>Sign-in</span>
            </div>
        </form>
    )
}

export default Signup
