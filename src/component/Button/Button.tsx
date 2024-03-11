import React, { FC } from 'react';
import { IButton } from '../../types/layout/button';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Button: FC<IButton> = (props) => {
    const { id, className, children, leftIcon, small, rightIcon, active, primary, secondary, outline, ...propItems } =
        props;

    const classNames = cx('wrapper', {
        [id as string]: id,
        [className as string]: className,
        primary,
        active,
        secondary,
        outline,
        small,
    });

    const CustomButton = () => {
        return (
            <button className={classNames} {...propItems}>
                {leftIcon && <span className={cx('icon', 'icon-left')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon', 'icon-right')}>{rightIcon}</span>}
            </button>
        );
    };

    const CustomLink = () => {
        return (
            <button className={classNames} {...propItems}>
                {leftIcon && <span className={cx('icon', 'icon-left')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon', 'icon-right')}>{rightIcon}</span>}
            </button>
        );
    };

    let ComponentTags: React.ElementType = CustomButton;

    if (propItems.href) {
        ComponentTags = CustomLink;
    }

    return <ComponentTags />;
};
