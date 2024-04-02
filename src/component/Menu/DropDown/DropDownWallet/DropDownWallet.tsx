import classNames from 'classnames/bind';
import styles from '../DropDown.module.scss';
import { DashBoardWalletDropDown } from '../../../../store/storeDashBoard';
import { Button } from '../../../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const DropDownWallet = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(['DashBoard']);

    const handleNavigate = (path?: string) => {
        if (path) {
            navigate(path);
        }
    };
    return (
        <div className={cx('dropdown-user')}>
            {DashBoardWalletDropDown.map((walletItem, index) => (
                <Button
                    onClick={() => handleNavigate(walletItem.path)}
                    className={cx('btn-dropdown-user')}
                    twoIcon
                    leftIcon={walletItem.icon}
                    key={index}
                >
                    {t(walletItem.title)}
                </Button>
            ))}
        </div>
    );
};
export default DropDownWallet;
