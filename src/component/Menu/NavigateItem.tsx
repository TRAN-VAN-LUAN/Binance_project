import { FC, useState } from 'react';
import { INavigate } from '../../types/layout/headerTypes';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { IconChervo } from '../../assets/Icon/icon';

const cx = classNames.bind(styles);

const NavigateItem: FC<INavigate> = (props) => {
    const { children } = props;
    const [show, setShow] = useState<boolean>(false);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div className={cx('header-menu-item')} onClick={handleClick}>
            <span className={cx('header-menu-nav')}>{children}</span>
            {show ? (
                <span className={cx('icon-chevron')}>
                    <IconChervo width="1.6rem" height="1.6rem"></IconChervo>
                </span>
            ) : (
                <span className={cx('icon-chevron')}>
                    <IconChervo width="1.6rem" height="1.6rem"></IconChervo>
                </span>
            )}
        </div>
    );
};

export default NavigateItem;
