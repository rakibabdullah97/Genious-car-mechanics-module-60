import React from 'react';
import useAuth from '../../Hooks/UseAuth';




const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div>
            <h2>Please log in</h2>
            <button onClick={signInUsingGoogle} className='btn btn-warning'>Sign in by Google</button>
        </div>
    );
};

export default Login;