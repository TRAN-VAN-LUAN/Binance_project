import { ReactNode } from 'react';

export interface ILayoutProvider {
    isAuthenticated: boolean;
    setAuthenticated?: () => void;
}

export const defaultLayout: ILayoutProvider = {
    isAuthenticated: false,
};

export interface IDropDown {
    icon?: ReactNode;
    title?: string;
    body?: string;
    className?: string;
}
