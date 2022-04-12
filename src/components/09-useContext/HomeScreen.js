import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { UserContext } from './UserContext';

const HomeScreen = () => {

    const { user } = useContext( UserContext );

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 )}
            </pre>
        </div>
    )
}

HomeScreen.propTypes = {}

export default HomeScreen