import { FC } from 'react';
import { IButton } from '../../types/layout/button';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Button: FC<IButton> = (props) => {
    const { id, className, onClick, ...propItems } = props;
    const classNames = cx('wrapper', {
        [className]: className,
        propItems,
    });
    return <button></button>;
};
