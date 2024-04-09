import { ReactNode } from 'react';
import { ICoin } from '../store/storeMarketPanel';

export interface ILayoutProvider {
    showNavDraw?: boolean;
    setShowNavDraw?: () => void;
    isAuthenticated: boolean;
    setAuthenticated?: () => void;
    setToggleThem?: () => void;
    theme?: string;
    focusDashBoard?: string;
    setFocusDashBoard?: (data: string) => void;
    coinItem?: ICoin;
    setCoinItem?: (coin: ICoin) => void;
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
