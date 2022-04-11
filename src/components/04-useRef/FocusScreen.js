import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import '../02-useEffect/effects.css'

const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef)

    const handleClick = () => {
        inputRef.current.select();
    }

  return (
    <div>

        <h1>Focus Screen</h1>
        <hr/>

        <input
            ref={ inputRef } 
            className='form-control'
            placeholder='su nombre'
        />

        <button 
            className='btn btn-outline-primary mt-5'
            onClick={ handleClick }
        >
            Focus
        </button>

    </div>
  )
}





FocusScreen.propTypes = {}

export default FocusScreen