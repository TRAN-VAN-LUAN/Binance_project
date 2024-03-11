import { Link } from 'react-router-dom';
import { Logo } from '../assets/Icon/icon';
import { cx } from './Layout';
import NavigateItem from '../component/Menu/NavigateItem';
import { useTranslation } from 'react-i18next';
import { IconAction, NAV } from './store/storeLayout';
import NavigateIcon from '../component/Menu/NavigateIcon';
import { Button } from '../component/Button/Button';

const AppHeader = () => {
    const { t } = useTranslation(['Header']);

    return (
        <div className={cx('topbar-main-container')}>
            <div className={cx('topbar-nav')}>
                <Link to="/" className={cx('topbar-logo')}>
                    <Logo width="12rem" height="2.4rem" />
                </Link>
                <div className={cx('nav-container')}>
                    {NAV.map((nav, index) =>
                        !!nav.to ? (
                            <Link className={cx('header-menu-nav')} key={index} to={nav.to}>
                                {t(nav.title)}
                            </Link>
                        ) : (
                            <NavigateItem key={index}>{t(nav.title)}</NavigateItem>
                        ),
                    )}
                </div>
            </div>
            <div className={cx('topbar-action')}>
                {IconAction.map((action, index) =>
                    !!action.icon ? (
                        <NavigateIcon key={index}>{<action.icon />}</NavigateIcon>
                    ) : (
                        <div className={cx('topbar-deposit')}>
                            <Button leftIcon={action.button.iconleft} primary small>
                                {t('deposit')}
                            </Button>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};

export default AppHeader;
