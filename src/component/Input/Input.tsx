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
    outline?: boolean;
    value?: number | string;
    onChange?: () => void;
    onBlur?: () => void;
    required?: boolean;
    disabled?: boolean;
    errorMessage?: ReactElement;
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    const { id, className, placeholder, type, role, errorMessage, value, outline, onChange } = props;
    const { TEXT, PASSWORD, CHECKBOX, NUMBER } = inputTypes;

    const renderInput = () => {
        switch (type) {
            case TEXT:
                return (
                    <input
                        id={id}
                        className={cx('input', {
                            [className as string]: className,
                        })}
                        placeholder={placeholder}
                        ref={ref}
                        type={type}
                        onChange={() => onChange}
                    ></input>
                );
                break;
            case NUMBER:
                return (
                    <input
                        id={id}
                        className={cx('input', 'number', {
                            [className as string]: className,
                        })}
                        placeholder={placeholder}
                        ref={ref}
                        value={value && value}
                        type={type}
                        onChange={onChange}
                    ></input>
                );
                break;

            case PASSWORD:
                return (
                    <input
                        id={id}
                        className={cx('input', {
                            [className as string]: className,
                        })}
                        placeholder={placeholder}
                        ref={ref}
                        type={type}
                        onChange={() => onChange}
                    ></input>
                );
            case CHECKBOX:
                return (
                    <input
                        id={id}
                        className={cx('input', {
                            [className as string]: className,
                        })}
                        role={role}
                        ref={ref}
                        type={type}
                        value={value}
                        onChange={() => onChange}
                    ></input>
                );
            default:
                return (
                    <input
                        id={id}
                        className={cx('input', {
                            [className as string]: className,
                        })}
                        placeholder={placeholder}
                        ref={ref}
                        type={type}
                        value={value}
                        onChange={() => onChange}
                    ></input>
                );
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper', { outline })}>{renderInput()}</div>
            {errorMessage && errorMessage}
        </div>
    );
});

export default Input;
