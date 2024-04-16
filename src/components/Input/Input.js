import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as EyeOpen } from '../../assets/icons/eye-open.svg';
import { ReactComponent as EyeClosed } from '../../assets/icons/eye-close.svg';
import useInputValidate from '../../hooks/useInputValidate/useInputValidate';
import { checkPasswordStrength } from '../../utils/checkPasswordStrength';

export default function Input({
    id,
    name,
    placeholder,
    value,
    label,
    onChange,
    type,
    readOnly,
    className,
    defaultValue,
    showError = true,
    disabled,
    variant,
}) {
    const { error, validate, setError } = useInputValidate({});
    const [passwordView, setPasswordView] = useState(false);

    const onBlurAction = () => {
        validate({ name, value })
    }

    return (
        <div className={className}>
            <div className={`relative input-container`}>
                <div className='flex justify-between items-center'>
                    {label &&
                        <label
                            htmlFor={id}
                            className={`
                        ${disabled ? 'bg-none' : 'bg-brand_white'} block
                        text-14 text-neutral_500 mb-[4px] cursor-default ${variant}`}
                        >
                            {label}
                        </label>
                    }
                    {type === 'password' && value &&
                        <p className={`${error ? 'text-[#ff0000]' : 'text-black'} text-[12px]`}>
                            {checkPasswordStrength(value)}
                        </p>
                    }
                </div>
                <input
                    id={id}
                    name={name}
                    type={(type === 'password' && (passwordView ? 'text' : 'password')) || type}
                    placeholder={placeholder || ''}
                    value={value}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    data-testid={id}
                    aria-labelledby={id}
                    onChange={onChange}
                    readOnly={readOnly}
                    autoComplete="off"
                    onBlur={onBlurAction}
                    onKeyDown={() => setError('')}
                    className={`${variant} 
                        h-[48px] px-4 text-neutral_600 text-14 w-full outline-0 border
                        rounded-[4px] focus:border-primary
                        ${disabled ? 'bg-neutral_100 border-neutral_100' : 'bg-brand_white border-stroke_line'} 
                    `}
                />
                {type === 'password' && (
                    <div
                        onClick={() => setPasswordView(!passwordView)}
                        data-testid={!passwordView ? 'show' : 'hide'}
                        className="flex items-center absolute top-[30px] right-[13.48px] cursor-pointer h-[40px]"
                    >
                        {!passwordView ? <EyeClosed /> : <EyeOpen />}
                    </div>
                )}
            </div>
            {showError &&
                <p className={`${error ? 'text-[#ff0000]' : 'text-black'} text-[12px]`}>
                    {error}
                </p>
            }
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    label: PropTypes.string,
    variant: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    readOnly: PropTypes.bool,
    showError: PropTypes.bool,
    helperText: PropTypes.string,
    className: PropTypes.string
};
