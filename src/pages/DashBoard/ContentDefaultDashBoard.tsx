import classNames from 'classnames/bind';
import styles from './DashBoard.module.scss';
import { useState } from 'react';

import { IconPen, IconToolTips, IconToolTipsWarp } from '../../assets/Icon/icon';
import { dashBoardItemHeader } from '../../store/storeDashBoard';
import ItemDetails from '../../component/DashBoardItem/ItemDetails';
import { useTranslation } from 'react-i18next';
import DashBoardVoucher from '../../component/DashBoardItem/DashBoardVoucherActive';
import { dashBoardVoucher } from '../../store/storeDashBoard';
import EstimatedBalance from './DashBoardElement/EstimatedBalance';

const cx = classNames.bind(styles);

const ContentDefaultDashBoard = () => {
    const { t } = useTranslation(['DashBoard']);
    const [active, setActive] = useState<string>('deposit');
    return (
        <>
            <div className={cx('dashboard-header')}>
                <div className={cx('info')}>
                    <span className={cx('avata')}>
                        <div className={cx('img-avata')}></div>
                        <div className={cx('icon-pen')}>
                            <IconPen />
                        </div>
                    </span>
                    <div className={cx('info-item')}>
                        <div className={cx('username')}>Anonymous-User-bc84d</div>
                        <div className={cx('info-action')}>
                            <div className={cx('bg-icon')}>
                                <IconToolTips />
                            </div>
                            <div className={cx('bg-icon')}>
                                <IconToolTipsWarp />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('info-details')}>
                    {dashBoardItemHeader.map((itemHeader, index) => (
                        <ItemDetails
                            key={index}
                            title={t(itemHeader.title)}
                            item={itemHeader.item}
                            icon={itemHeader?.icon}
                        ></ItemDetails>
                    ))}
                </div>
            </div>
            <div className={cx('dashboard-container')}>
                <div className={cx('subtitle')}>{t('getstarted')}</div>
                <div className={cx('voucher')}>
                    {dashBoardVoucher.map((voucher, index) => (
                        <DashBoardVoucher
                            key={index}
                            id={voucher.id}
                            name={voucher.name}
                            subTitle={voucher.subTitle}
                            price={voucher.price}
                            active={voucher.active}
                            state={active === voucher.name}
                            setStateActive={setActive}
                        ></DashBoardVoucher>
                    ))}
                </div>
            </div>
            <EstimatedBalance />
        </>
    );
};

export default ContentDefaultDashBoard;
