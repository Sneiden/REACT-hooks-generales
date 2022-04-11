import React from 'react';
import PropTypes from 'prop-types';
import '../02-useEffect/effects.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading 
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    (
                        <figure className="text-end">
                            <blockquote className="blockquote">
                                <p>{ quote }</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                { author } in <cite title="Source Title">BreakingBad</cite>
                            </figcaption>
                        </figure>
                    )
            }

            <button 
                onClick={ increment }
                className='btn btn-primary'
            >
                Siguiente frase 
            </button>

        </div>
    )
}



MultipleCustomHooks.propTypes = {}

export default MultipleCustomHooks