import React from 'react';
// import '../styles/index.scss';

function Button(props) {
    return (
        <a href={props.href} className={props.className}>
            {props.value}
        </a>
    )
}

export default Button
