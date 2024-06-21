import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import './Login.css'

// Revise
const basicForm = {
    userName: '',
    email: '',
    password: ''
}

export default function Form() {
    // MARÍA REMINDER: look up new FormData()
    const [formData, setFormData] = useState(basicForm)
    const { register, login, isLogged, currentUser, userData } = useAuth()

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { userName, email, password } = formData

        // Testing OK
        // await register(userName, email, password)

        // Testing
        await login(email, password)  
    }

    return (<>
            <form className='form' onSubmit={handleSubmit}>
                <label>User Name</label>
                <input type='text' name='userName' value={formData.userName} onChange={handleChange} />

                <label>Email</label>
                <input type='email' name='email' value={formData.email} onChange={handleChange} />

                <label>Password</label>
                <input type='password' name='password' value={formData.password} onChange={handleChange} />

                <button className='btn' type='submit'>Submit</button>
            </form>
    </>)
}