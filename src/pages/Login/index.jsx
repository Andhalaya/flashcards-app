import { useAuth } from '../../context/AuthContext'
import Form from './Form'
import './Login.css'

export default function LoginPage() {

    return (<>
        <div className='form-container'>
            <Form />
        </div>
    </>)
}