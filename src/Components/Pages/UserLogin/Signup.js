import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useForm } from 'react-hook-form'
import axios from '../../../axios';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

function Signup() {

    const { setMobile } = useContext(UserContext)

    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is required')
          .min(4, 'Password length should be at least 4 characters'),
        passwordConfirm: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password')], 'Passwords must and should match'),
      })
    
      const validationOpt = { resolver: yupResolver(formSchema) }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(validationOpt);

    const onSubmit = (data) => {
        data.passwordConfirm=null
        axios({
            method:'POST',
            url:'signup',
            data:data
        })
        .then((response)=>{
            console.log(response)
            localStorage.setItem('token' , 'Bearer ' + response.data.accessToken)
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
            {errors.password && <p className='error-message'>{errors.password.message}</p>}

            <input type="password" placeholder="Confirm Password"
                {...register('passwordConfirm', { required: true })}
                className={errors.passwordConfirm && 'input-error'}
            />
            {errors.passwordConfirm && <p className='error-message'>{errors.passwordConfirm.message}</p>}

            <button>SIGN UP</button>
            <div className="signin-swap">
                Already have an account ? <span className='swap-link' onClick={() => setMobile(false)}>Sign-in</span>
            </div>
        </form>
    )
}

export default Signup
