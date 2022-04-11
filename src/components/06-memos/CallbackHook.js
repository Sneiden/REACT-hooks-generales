import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import '../02-useEffect/effects.css'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter( counter+1 );
    // }

    const increment = useCallback( (num) => {
        setCounter( c => c + num );
    },[ setCounter ])
    

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment }/>
        </div>
    )
}



CallbackHook.propTypes = {}

export default CallbackHook