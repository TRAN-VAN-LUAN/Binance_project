import { ReactNode } from 'react';

export interface IDashBoard {
    title: string;
    icon: ReactNode;
    path?: string;
    children?: IDashBoardChildren[];
}

export interface IDashBoardChildren {
    title: string;
    path?: string;
}
