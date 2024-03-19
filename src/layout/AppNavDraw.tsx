import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import { INavDraw } from '../store/storeLayout';
import { Button } from '../component/Button/Button';
import { useTranslation } from 'react-i18next';
import { IconClose } from '../assets/Icon/icon';
import { AuthData } from './context/layoutContext';

const cx = classNames.bind(styles);

const AppNavDraw = () => {
    const { t } = useTranslation(['Header']);
    const { setShowNavDraw } = AuthData();
    return (
        <div className={cx('navdraw-container')}>
            <div onClick={setShowNavDraw} className={cx('icon-close')}>
                <IconClose />
            </div>
            {INavDraw.map((navItem, index) => (
                <Button className={cx('btn-navdraw')} key={index} leftIcon={<navItem.icon />} twoIcon>
                    {t(navItem.title)}
                </Button>
            ))}
        </div>
    );
};

export default AppNavDraw;
