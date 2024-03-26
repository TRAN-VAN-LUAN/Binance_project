import classNames from 'classnames/bind';
import styles from './DashBoard.module.scss';
import AppSidebar from '../../layout/AppSideBar/AppSidebar';

import { Outlet } from 'react-router-dom';
import UserProvider from '../../layout/context/userLayout';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Loading from '../Loading/Loading';

const cx = classNames.bind(styles);

const DashBoard = () => {
    const isLoading = useSelector((state: RootState) => state.user.isLoading);

    return (
        <>
            <UserProvider />

            {isLoading ? (
                <Loading />
            ) : (
                <div className={cx('main-container')}>
                    <AppSidebar />
                    <div className={cx('container')}>
                        <Outlet />
                    </div>
                </div>
            )}
        </>
    );
};

export default DashBoard;
