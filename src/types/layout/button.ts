import { childComponentProps } from '../typesLayout';

export interface IButton {
    id?: string;
    className?: string;
    placeholder?: string;
    type?: string;
    primary?: boolean;
    success?: boolean;
    help?: boolean;
    outline?: boolean;
    secondary?: boolean;
    info?: boolean;
    danger?: boolean;
    warning?: boolean;
    label?: string;
    onClick?: any;
    onBlur?: any;
    onSubmit?: any;
    required?: boolean;
    disabled?: boolean;
    children?: childComponentProps;
    background?: string;
}
