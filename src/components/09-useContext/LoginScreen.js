import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './UserContext';

const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext)

    const loginUser = {
        ...user,
        id:123,
        name: 'Hector'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={ ()=> setUser(loginUser) }
            >
                Login
            </button>
        </div>
    )
}

LoginScreen.propTypes = {}

export default LoginScreen