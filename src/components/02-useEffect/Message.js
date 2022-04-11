import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0});
    const { x, y } = coords;

    useEffect(() => {
      
        const mouseMove = (e) => {
            setCoords({
                ...coords,
                x: e.x, 
                y: e.y
            });
        }

        window.addEventListener('mousemove', mouseMove);
    
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }

    }, []);

    return (
        <div>
            <h3>Terminado!</h3>
            <p>x: {x}, y: {y}</p>
        </div>
    )
}





Message.propTypes = {}

export default Message