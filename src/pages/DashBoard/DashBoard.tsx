import classNames from 'classnames/bind';
import styles from './DashBoard.module.scss';
import AppSidebar from '../../layout/AppSidebar';

import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

const DashBoard = () => {
    return (
        <div className={cx('main-container')}>
            <AppSidebar />
            <div className={cx('container')}>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;
