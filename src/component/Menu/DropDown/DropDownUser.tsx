import classNames from 'classnames/bind';
import styles from './DropDown.module.scss';
import { getUserFromLocalStorage } from '../../../utils/auth';
import { StoreDashBoardUser } from '../../../store/storeDashBoard';
import { Button } from '../../Button/Button';
import { DashBoard } from '../../../store/storeDashBoard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const cx = classNames.bind(styles);
const DropDownUser = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(['Header']);
    const currentUser = getUserFromLocalStorage();

    const handleNavigate = (path?: string) => {
        if (path) {
            navigate(path);
        }
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
                        onClick={() => handleNavigate(dashBoardItem.path)}
                    >
                        {t(dashBoardItem.title)}
                    </Button>
                </>
            ))}
        </div>
    );
};

export default DropDownUser;
