import React from 'react'
import PropTypes from 'prop-types'


const Small = React.memo(({ value }) => {

    console.log('Me volvi a llamar :( ')

    return (
        <small>{ value }</small>
    )
});


Small.propTypes = {}

export default Small