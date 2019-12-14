import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <Link to={props.href} className={props.className}>
            {props.name}
        </Link>
    )
}

export default Button
