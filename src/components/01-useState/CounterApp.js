import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './counter.css'

const CounterApp = () => {

    const [ state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2} = state

    const handleClick = () => {
        setState( {
            ...state,
            counter1: counter1 + 1,           
        } )
    }

    return (
        <>
            <h1>Counter1 { counter1 }</h1>
            <h1>Counter2 { counter2 }</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleClick }
            >
                +1
            </button>
        </>
    )
}

CounterApp.propTypes = {}

export default CounterApp