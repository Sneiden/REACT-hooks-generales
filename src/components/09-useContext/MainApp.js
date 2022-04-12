import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'

const MainApp = () => {

const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <AppRouter />
        </UserContext.Provider>
    )
}

MainApp.propTypes = {}

export default MainApp