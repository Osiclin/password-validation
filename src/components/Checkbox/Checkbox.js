import React from "react";
import PropTypes from 'prop-types'

export default function Checkbox({ label, onChange, id, className, checked, disabled }) {
    return (
        <div className={`${className} flex items-center`}>
            <input
                checked={checked}
                disabled={disabled}
                type="checkbox"
                data-testid={id}
                id={id}
                className={`${disabled ? "cursor-default" : "cursor-pointer"}`}
                onChange={(e) => onChange(e.target.checked)}
            />
            {label && <label htmlFor={id} className={`ml-[4px]`}>{label}</label>}
        </div>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    id: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool
}