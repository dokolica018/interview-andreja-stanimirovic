import React from 'react'

const Button = ({ title, className, onHandle, icon }) => {
    return (
        <button onClick={onHandle} className={className}>
            <i className="material-icons right">{icon}</i>
            {title}
        </button>
    )
}

export default Button
