import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">

                <Link to='/' className="navbar-brand">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink end to='/' className={({isActive}) => 'nav-link' + (isActive ?' active' : '')} aria-current="page">Home</NavLink>
                        <NavLink end to='/about' className={({isActive}) => 'nav-link' + (isActive ?' active' : '')} >About</NavLink>
                        <NavLink end to='/login' className={({isActive}) => 'nav-link' + (isActive ?' active' : '')} >Login</NavLink>
                    </div>
                </div>

            </div>
        </nav>
    )
};

NavBar.propTypes = {}

export default NavBar