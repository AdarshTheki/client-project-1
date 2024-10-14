import React from 'react';

const Button = ({ leftIcon, rightIcon, name = '', className = '' }, props) => {
    return (
        <button
            {...props}
            className={`rounded-lg text-sm font-semibold flex capitalize items-center justify-center gap-2 px-8 py-3 text-white button hover:shadow-2xl hover:opacity-90 duration-300 text-nowrap ${className}`}>
            {leftIcon && leftIcon}
            {name}
            {rightIcon && rightIcon}
        </button>
    );
};

export default Button;
