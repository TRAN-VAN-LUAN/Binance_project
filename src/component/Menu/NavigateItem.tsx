import { FC } from 'react';
import { INavigate } from '../../types/layout/headerTypes';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { IconChervo } from '../../assets/Icon/icon';

const cx = classNames.bind(styles);

const NavigateItem: FC<INavigate> = (props) => {
    const { children, title } = props;

    // const handleClick = () => {
    //     setShow(!show);
    // };

    return (
        <div className={cx('header-menu-item')}>
            <span className={cx('header-menu-nav')}>{title}</span>
            <span className={cx('icon-chevron')}>
                <IconChervo width="1.6rem" height="1.6rem" className={cx('icon')}></IconChervo>
            </span>
            {children}
        </div>
    );
};

export default NavigateItem;
