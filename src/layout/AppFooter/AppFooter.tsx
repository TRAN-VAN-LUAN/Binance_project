import classNames from 'classnames/bind';
import styles from './AppFooter.module.scss';
import { StoreFooter, StoreFooterIcon } from '../../store/storeFooter';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const AppFooter = () => {
    const { t } = useTranslation(['Footer']);

    return (
        <div className={cx('footer-container-main')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-head')}>
                    <>
                        {StoreFooterIcon.map((storeIcon, index) => (
                            <>
                                <div className={cx('footer-community')} key={index}>
                                    <span className={cx('title')}>{t(storeIcon.title)}</span>
                                    <div className={cx('wrapper-icon')}>
                                        {storeIcon.children &&
                                            storeIcon.children.map((item, index) => (
                                                <a key={index} href={item.link}>
                                                    {item.icon}
                                                </a>
                                            ))}
                                    </div>
                                </div>
                            </>
                        ))}
                        <div className={cx('footer-navlist')}>
                            {StoreFooter.map((footerItem, index) => (
                                <>
                                    <div key={index} className={cx('wrapper-content')}>
                                        <span className={cx('title')}>{t(footerItem.title)}</span>
                                        <div className={cx('wrapper-navigate-title')}>
                                            {footerItem.children &&
                                                footerItem.children.map((item, index) => (
                                                    <a key={index} href={item.link}>
                                                        {item.title}
                                                    </a>
                                                ))}
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </>
                </div>
                <div className={cx('footer-tail')}></div>
            </div>
        </div>
    );
};

export default AppFooter;