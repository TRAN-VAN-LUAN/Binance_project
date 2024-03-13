import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import AppTopbar from './AppHeader';
import BreadCrumb from './BreadCrumb';
import { Outlet } from 'react-router-dom';
import AppFooter from './AppFooter';

export const cx = classNames.bind(styles);

const Layout = () => {
    return (
        <div className={cx('main-container')}>
            <div className={cx('main')}>
                <AppTopbar />
                <div className={cx('container')}>
                    <BreadCrumb />
                    <Outlet />
                </div>
            </div>
            <AppFooter />
        </div>
    );
};

export default Layout;
