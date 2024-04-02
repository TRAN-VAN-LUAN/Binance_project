import { ReactElement, forwardRef } from 'react';

import { inputTypes } from '../../enums/InputType';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IInputProps {
    id?: string;
    className?: string;
    placeholder?: string;
    type?: string;
    role?: string;
    label?: string;
    onChange?: any;
    onBlur?: any;
    required?: boolean;
    disabled?: boolean;
    errorMessage?: ReactElement;
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    const { id, className, placeholder, type, role, errorMessage } = props;
    const { TEXT, PASSWORD, CHECKBOX } = inputTypes;
    const classes = cx('input', {
        [className as string]: className,
    });
    const renderInput = () => {
        switch (type) {
            case TEXT:
                return (
                    <input
                        id={id}
                        className={classes}
                        placeholder={placeholder}
                        ref={ref}
                        type={type}
                        onChange={(e) => props.onChange(e.target.value)}
                    ></input>
                );
                break;

            case PASSWORD:
                return (
                    <input
                        id={id}
                        className={classes}
                        placeholder={placeholder}
                        ref={ref}
                        type={type}
                        onChange={(e) => props.onChange(e.target.value)}
                    ></input>
                );
            case CHECKBOX:
                return (
                    <input
                        id={id}
                        className={classes}
                        role={role}
                        type={type}
                        onChange={(e) => props.onChange(e.target.value)}
                    ></input>
                );
            default:
                return (
                    <input
                        id={id}
                        className={classes}
                        placeholder={placeholder}
                        ref={ref}
                        type={type}
                        onChange={(e) => props.onChange(e.target.value)}
                    ></input>
                );
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                {/* {
                    <label htmlFor={id} className="font-bold block">
                        {label} {props.required && <span className="text-red-500">*</span>}
                    </label>
                } */}
                {renderInput()}
            </div>
            {errorMessage && errorMessage}
        </div>
    );
});

export default Input;
