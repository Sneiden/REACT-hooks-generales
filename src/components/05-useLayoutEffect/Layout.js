import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css'

const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {

        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <figure className="text-end">
                <blockquote className="blockquote">
                    <p ref={ pTag }>{ quote }</p>
                </blockquote>
                {/* <figcaption className="blockquote-footer">
                    { author } in <cite title="Source Title">BreakingBad</cite>
                </figcaption> */}
            </figure>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button 
                onClick={ increment }
                className='btn btn-primary'
            >
                Siguiente frase 
            </button>

        </div>
    )
}



Layout.propTypes = {}

export default Layout