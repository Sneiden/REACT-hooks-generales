import React from 'react'
import PropTypes from 'prop-types'

const ShowIncrement = React.memo(({ increment }) => {

    console.log(' Me volvi a generar :( ');

    return (
        <button 
            className='btn btn-outline-primary ms-3'
            onClick={ () => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})

ShowIncrement.propTypes = {}

export default ShowIncrement