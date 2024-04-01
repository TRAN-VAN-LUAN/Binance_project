import classNames from 'classnames/bind';
import styles from './MarketOverview.module.scss';
import { EstimateBalance } from '../../store/storeDashBoard';
import { useTranslation } from 'react-i18next';
import { Button } from '../../component/Button/Button';
import { IconBitcoint } from '../../assets/Icon/icon';
import { storePriceCoinOverview } from '../../store/storeMarketPanel';
import MarketPanelItem from '../DashBoard/DashBoardElement/MarketPanel/MarketPanelItem';
import { useAppDispatch } from '../../store';
import { useEffect } from 'react';
import { getCoinApi } from '../../services/coinApI';
const cx = classNames.bind(styles);

const MarketOverview = () => {
    const { t } = useTranslation(['Overview']);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCoinApi());
    }, []);

    return (
        <div className={cx('main-container')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('content-info')}>
                        <div className={cx('list-info')}>
                            <div className={cx('info-primary')}>
                                {t('Get Verified ')}
                                <span>{t('and Start Your Crypto Journey')}</span>
                            </div>
                        </div>
                        <div className={cx('estimate-content')}>
                            <div className={cx('estimate-title')}>{t('Your Estimated Balance')}</div>
                            <div className={cx('estimate-money')}>
                                <span className={cx('text-primary')}>{EstimateBalance.money}</span>
                                <span>BTC</span>
                                <span> ≈ ${EstimateBalance.money}</span>
                            </div>
                            <div className={cx('estimate-pnl')}>
                                {t('Today‘s PnL')}

                                <span>
                                    +${EstimateBalance.money}({EstimateBalance.money}%)
                                </span>
                            </div>
                        </div>

                        <div className={cx('verify')}>
                            <Button className={cx('btn-verify')} primary>
                                {t('verify now')}
                            </Button>
                            <div className={cx('verify-tutorial')}>
                                <IconBitcoint />
                                <div>{t('Read Tutorial')}</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-coinprice')}>
                        <div className={cx('wrapper-panel')}>
                            <MarketPanelItem dataCoinMarket={storePriceCoinOverview}></MarketPanelItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketOverview;
