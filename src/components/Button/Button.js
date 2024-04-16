import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, className, onClick, theme, textSize, type, children, disabled }) {
    const themeStyle = () => {
        switch (theme) {
            case 'primary':
                return `text-white ${disabled ? 'bg-[#E4E9FB] border-[#E4E9FB]' : 'bg-primary border-primary'}`
            case 'secondary':
                return 'text-primary border-primary'
            default:
                return ''
        }
    }

    return (
        <button
            className={`
            ${textSize || 'text-[16px]'} flex items-center justify-center rounded-[6px] px-[16px] py-[8px] 
            font-medium border ${themeStyle()} ${className}
            `}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
            {name}
        </button>
    );
}

Button.propTypes = {
    name: PropTypes.string,
    theme: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    textSize: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.element,
    disabled: PropTypes.bool
};
