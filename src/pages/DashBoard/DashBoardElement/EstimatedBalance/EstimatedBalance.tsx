import classNames from 'classnames/bind';
import styles from './EstimatedBalance.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../component/Button/Button';
import { EstimateBalance } from '../../../../store/storeDashBoard';
import { IconEye } from '../../../../assets/Icon/icon';

const cx = classNames.bind(styles);

const EstimatedBalance = () => {
    const { t } = useTranslation(['DashBoard']);

    return (
        <div className={cx('estimate-container')}>
            <div className={cx('estimate-main')}>
                <div className={cx('estimate-title')}>
                    {t('estimated_balance')} <IconEye />
                </div>
                <div className={cx('estimate-btn')}>
                    <Button active>{t('deposit')}</Button>
                    <Button active>{t('withdraw')}</Button>
                    <Button active>{t('cashin')}</Button>
                </div>
            </div>
            <div className={cx('estimate-content')}>
                <div className={cx('estimate-money')}>
                    {EstimateBalance.money}
                    <span>BTC</span>
                </div>
                <span> ≈ ${EstimateBalance.money}</span>
                <div className={cx('estimate-pnl')}>
                    {t('Today‘s PnL')}

                    <span>
                        +${EstimateBalance.money}({EstimateBalance.money}%)
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EstimatedBalance;
