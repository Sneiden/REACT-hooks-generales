import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './effects.css'
import Message from './Message';

const SimpleForm = (props) => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hey!');
    },[]);

    useEffect( () => {
        // console.log('FormState cambio');
    },[formState]);

    useEffect( () => {
        // console.log('email cambio');
    },[email]);

    const habdleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });

    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ habdleInputChange }
                />
            </div>
            

            <div className='form-group'>
                <input
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ habdleInputChange }
                />
            </div>


            { (name === '123') && <Message />}
        </>
    )
}

SimpleForm.propTypes = {}

export default SimpleForm