import React from 'react'

function FormInput(props) {
    const { type, name, placeholder, className } = props;

    return (
        <input type={type} name={name} placeholder={placeholder} className={className}/>
    )
}

export default FormInput
