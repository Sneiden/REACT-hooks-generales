import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import NavBar from './NavBar';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route exact path="/about" element={<AboutScreen />} />
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route index path="/" element={<HomeScreen />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>

            </div>
        </Router>
    )
}

AppRouter.propTypes = {}

export default AppRouter