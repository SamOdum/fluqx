import React from 'react'

function FormInput(props) {
    const { type, name, placeholder, onChange, className, value } = props;

    return (
        <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} className={className}/>
    )
}

export default FormInput
