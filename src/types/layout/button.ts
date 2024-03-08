// import { childComponentProps } from '../typesLayout';

export interface IButton {
    id?: string;
    className?: string;
    type?: ButtonType;
    href?: string;
    primary?: boolean;
    active?: boolean;
    secondary?: boolean;
    outline?: boolean;
    text?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    onClick?: () => void;
    onBlur?: () => void;
    onSubmit?: () => void;
    required?: boolean;
    disabled?: boolean;
    children?: string;
    leftIcon?: any;
    rightIcon?: any;
}

type ButtonType = 'submit' | 'reset' | 'button' | undefined;
