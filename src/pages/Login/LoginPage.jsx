import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import './Login.css'

// Revise
const basicForm = {
    userName: '',
    email: '',
    password: ''
}

export default function LoginPage() {
    const [pageType, setPageType] = useState('login')
    const [formData, setFormData] = useState(basicForm)
    const { register, login, userData, isLogged } = useAuth()
    const navigate = useNavigate()

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { userName, email, password } = formData

        pageType === 'login'
            ? await login(email, password)
            : await register(userName, email, password)

        // Redirect to Home
        navigate('/')
    }

    return (
        <div className='form-container'>
            {pageType === 'login'
                ? <h2>Log in</h2>
                : <h2>Register</h2>
            }
            <form className='form' onSubmit={handleSubmit}>
                {pageType === 'register' && (
                    <>
                        <label>User Name</label>
                        <input type='text' name='userName' value={formData.userName} onChange={handleChange} />
                    </>
                )}

                <label>Email</label>
                <input type='email' name='email' value={formData.email} onChange={handleChange} />

                <label>Password</label>
                <input type='password' name='password' value={formData.password} onChange={handleChange} />

                <button className='btn' type='submit'>Submit</button>
            </form>
            <h4 className='switchForm'
                onClick={pageType === 'login'
                    ? () => setPageType('register')
                    : () => setPageType('login')}>
                {pageType === 'login'
                    ? <>Don't have an account? Register <span className='changeForm'>here</span></>
                    : <>Already have an account? Login <span className='changeForm'>here</span></>
                }
            </h4>
        </div>
    )
}