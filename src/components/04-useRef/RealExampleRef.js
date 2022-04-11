import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
import '../02-useEffect/effects.css'

const RealExampleRef = () => {

    const [show, setShow] = useState(false);

  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr/>

        {show && <MultipleCustomHooks />}

        <button
            className='btn btn-primary mt-5'
            onClick={ () => {
                setShow(!show) 
            }}
        >
            Mostrar/Ocultar
        </button>
    </div>
  )
}



RealExampleRef.propTypes = {}

export default RealExampleRef