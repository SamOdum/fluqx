import React from 'react'

function Form(props) {
    const { children, action, className } = props;

    return (
        <form action={action} className={className}>
            {children}
        </form>
    )
}

export default Form
