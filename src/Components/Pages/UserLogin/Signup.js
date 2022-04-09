import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useForm } from 'react-hook-form'
import axios from '../../../axios';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { AppContext, LoadingContext } from '../../../AppContext'

function Signup() {

    const { setLoggedIn } = useContext(AppContext)
    const { setMobile } = useContext(UserContext)
    const { setLoading } = useContext(LoadingContext)

    let navigate = useNavigate()
    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('Missing Fields'),
        mobile: Yup.string()
            .required('Missing Fields'),
        password: Yup.string()
            .required('Missing Fields')
            .min(4, 'Password length should be at least 4 characters'),
        passwordConfirm: Yup.string()
            .required('Missing Fields')
            .oneOf([Yup.ref('password')], 'Passwords must and should match'),
    })

    const validationOpt = { resolver: yupResolver(formSchema) }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(validationOpt);

    const handleKeypress = e => {
        if (e.key === 'Enter') {
            setLoading(true)
        }
    };

    const onSubmit = (data) => {
        data.passwordConfirm = null
        axios({
            method: 'POST',
            url: 'signup',
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
            {errors.name && <p className='error-message'>{errors.name.message}</p>}

            <input type="tel" placeholder="Mobile"
                pattern="^[0-9]{10,10}$"
                {...register('mobile', { required: true })}
                className={errors.mobile && 'input-error'}
            />
            {errors.mobile && <p className='error-message'>{errors.mobile.message}</p>}

            <input type="password" placeholder="Password"
                {...register('password', { required: true })}
                className={errors.password && 'input-error'}
            />
            {errors.password && <p className='error-message'>{errors.password.message}</p>}

            <input type="password" placeholder="Confirm Password"
                {...register('passwordConfirm', { required: true })}
                className={errors.passwordConfirm && 'input-error'}
                onKeyPress={handleKeypress}
            />
            {errors.passwordConfirm && <p className='error-message'>{errors.passwordConfirm.message}</p>}

            <button onClick={() => setLoading(true)}>SIGN UP</button>
            <div className="signin-swap">
                Already have an account ? <span className='swap-link' onClick={() => setMobile(false)}>Sign-in</span>
            </div>
        </form>
    )
}

export default Signup
