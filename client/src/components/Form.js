import React from 'react'

function Form(props) {
    const { children, handleFormSubmit, className } = props;

    return (
        <form onSubmit={handleFormSubmit} className={className}>
            {children}
        </form>
    )
}

export default Form
