import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import AppTopbar from './AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';
import AppFooter from './AppFooter/AppFooter';
import AppNavDraw from './AppNavDraw/AppNavDraw';
import { AuthData } from './context/layoutContext';

export const cx = classNames.bind(styles);

const Layout = () => {
    const { showNavDraw, theme } = AuthData();
    return (
        <>
            <div className={cx('main-container', theme)}>
                <div className={cx('main')}>
                    <AppTopbar />
                    {showNavDraw && <AppNavDraw />}
                    <div className={cx('container')}>
                        <Outlet />
                    </div>
                </div>
                <AppFooter />
            </div>
        </>
    );
};

export default Layout;
