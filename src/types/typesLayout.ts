import { ReactNode } from 'react';

export interface childComponentProps {
    children: ReactNode;
    title?: string;
    className?: string;
    onClick?: () => void;
}
