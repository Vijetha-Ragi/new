import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashbord/dashboard';


const Login = () => {

    const navigate = useNavigate()

    const Moveto = () => {
        navigate('/dashboard')
    }
    return (
        <div>
            <Button variant="primary" onClick={Moveto}>Login</Button>
        </div>

    )
}

export default Login;

