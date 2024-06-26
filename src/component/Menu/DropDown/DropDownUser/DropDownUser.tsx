import classNames from 'classnames/bind';
import styles from '../DropDown.module.scss';
import { StoreDashBoardUser } from '../../../../store/storeDashBoard';
import { Button } from '../../../Button/Button';
import { DashBoard } from '../../../../store/storeDashBoard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../store';
import { IconLogout } from '../../../../assets/Icon/icon';
import { logout } from '../../../../slice/useSlice';
import { AuthData } from '../../../../layout/context/layoutContext';

export const cx = classNames.bind(styles);
const DropDownUser = () => {
    const navigate = useNavigate();
    const { setFocusDashBoard } = AuthData();
    const dispatch = useAppDispatch();
    const { t } = useTranslation(['DashBoard']);
    const currentUser = useSelector((state: RootState) => state.user.currentUser);

    const handleNavigate = (path?: string, title?: string) => {
        if (title && path) {
            console.log(title);
            navigate(path);
            if (setFocusDashBoard) {
                console.log(title);
                setFocusDashBoard(title);
            }
        }
    };

    const hanldeLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className={cx('dropdown-user')}>
            <div className={cx('username')}>{currentUser && currentUser.email}</div>
            <div className={cx('user-btn-info')}>
                {StoreDashBoardUser.map((infoBtn, index) => (
                    <Button small secondary key={index} leftIcon={infoBtn.icon} twoIcon>
                        {t(infoBtn.title)}
                    </Button>
                ))}
            </div>
            {DashBoard.map((dashBoardItem, index) => (
                <>
                    <Button
                        className={cx('btn-dropdown-user')}
                        key={index}
                        leftIcon={dashBoardItem.icon}
                        twoIcon
                        onClick={() =>
                            handleNavigate(
                                dashBoardItem.path || (dashBoardItem.children && dashBoardItem.children[0].path),
                                (dashBoardItem.children && dashBoardItem.children[0].title) || dashBoardItem.title,
                            )
                        }
                    >
                        {t(dashBoardItem.title)}
                    </Button>
                </>
            ))}
            <Button
                onClick={() => hanldeLogout()}
                className={cx('btn-dropdown-user')}
                twoIcon
                leftIcon={<IconLogout />}
            >
                {t('logout')}
            </Button>
        </div>
    );
};

export default DropDownUser;
