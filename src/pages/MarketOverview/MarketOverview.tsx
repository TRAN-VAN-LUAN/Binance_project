import classNames from 'classnames/bind';
import styles from './MarketOverview.module.scss';
import { EstimateBalance } from '../../store/storeDashBoard';
import { useTranslation } from 'react-i18next';
import { Button } from '../../component/Button/Button';
import { ICoin, storePriceCoinOverview } from '../../store/storeMarketPanel';
import MarketPanelItem from '../DashBoard/DashBoardElement/MarketPanel/MarketPanelItem';
import { useAppDispatch } from '../../store';
import { useEffect, useState } from 'react';
import { getCoinApi } from '../../services/coinApI';
import { storeLayoutOverview } from '../../store/storeOverview';
import { IconArrowRight, IconDownload, IconHelp, IconSpeaker } from '../../assets/Icon/icon';
import QR from '../../component/OverViewItem/QR';
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../../layout/context/layoutContext';
const cx = classNames.bind(styles);

export const countDown = (
    date: number,
    setDay: (data: number) => void,
    setHour: (data: number) => void,
    setMinute: (data: number) => void,
    setSeconds?: (data: number) => void,
) => {
    const countDownInterval = setInterval(() => {
        let now = new Date().getTime();
        let distance = date - now;
        setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinute(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds && setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        if (distance < 0) {
            clearInterval(countDownInterval);
        }
    }, 1000);
};

interface IDevice {
    title: string;
    img: string;
}

const MarketOverview = () => {
    const { t } = useTranslation(['Overview']);
    const { setCoinItem } = AuthData();
    const dispatch = useAppDispatch();
    const { contentInfo, contentCoinPrice, contentDevices, contentDownLoad } = storeLayoutOverview;
    const [changeDevice, setChangeDevice] = useState<IDevice>(contentDevices.lite);
    const [day, setDay] = useState<number>(0);
    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const navigate = useNavigate();

    const date = new Date(contentCoinPrice.time).getTime();

    countDown(date, setDay, setHour, setMinute, setSeconds);

    const hanldeChangeDevice = (device: IDevice) => {
        setChangeDevice(device);
    };

    const setShowCrypto = (data: ICoin) => {
        setCoinItem && setCoinItem(data);
        console.log(data);
        navigate('/crypto');
    };

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
                                {t(contentInfo.titlePrimary)}
                                <span> {t(contentInfo.text)}</span>
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
                                {t(contentInfo.actionPrimary.title)}
                            </Button>
                            <div className={cx('verify-tutorial')}>
                                {contentInfo.actionDefault.icon}
                                <div>{t(contentInfo.actionDefault.title)}</div>
                            </div>
                        </div>

                        <div className={cx('content-notice')}>
                            <IconSpeaker />
                            <div>
                                <span>{t('Binance P2P Adds Support for FDUSD ')}</span>
                                2023-08-15
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-coinprice')}>
                        <div className={cx('wrapper-panel')}>
                            <MarketPanelItem
                                setShowCrypto={setShowCrypto}
                                dataCoinMarket={storePriceCoinOverview}
                            ></MarketPanelItem>
                        </div>

                        <div className={cx('content-para')}>
                            {contentCoinPrice.content.map((content, index) => (
                                <span key={index}>{content}</span>
                            ))}
                            <a className={cx('content-view-all')}>
                                {t('View All Articles')}
                                <IconArrowRight />
                            </a>
                        </div>

                        <div className={cx('coin-countdown')}>
                            <div className={cx('coin-countdown-title')}>
                                {t('Bitcoin Halving Countdown')}
                                <IconHelp />
                            </div>
                            <div className={cx('countdown')}>
                                <div>
                                    {day}
                                    <span>D</span>
                                </div>
                                <div>
                                    {hour}
                                    <span>H</span>
                                </div>

                                <div>
                                    {minute}
                                    <span>M</span>
                                </div>

                                <div>
                                    {seconds}
                                    <span>S</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('wrapper-detail')}>
                    <div className={cx('show-devices')}>
                        <div className={cx('img-devices')}>
                            <img src={changeDevice.img} alt={changeDevice.title} />
                        </div>
                        <div className={cx('wrapper-btn-show')}>
                            <div
                                onClick={() => hanldeChangeDevice(contentDevices.deskTop)}
                                className={cx(
                                    'btn-show-devices',
                                    changeDevice.title === contentDevices.deskTop.title ? 'active' : '',
                                )}
                            >
                                {contentDevices.deskTop.title}
                            </div>
                            <div
                                onClick={() => hanldeChangeDevice(contentDevices.lite)}
                                className={cx(
                                    'btn-show-devices',
                                    changeDevice.title === contentDevices.lite.title ? 'active' : '',
                                )}
                            >
                                {contentDevices.lite.title}
                            </div>
                            <div
                                onClick={() => hanldeChangeDevice(contentDevices.pro)}
                                className={cx(
                                    'btn-show-devices',
                                    changeDevice.title === contentDevices.pro.title ? 'active' : '',
                                )}
                            >
                                {contentDevices.pro.title}
                            </div>
                        </div>
                    </div>
                    <div className={cx('show-devices-link')}>
                        <div className={cx('show-devices-content')}>{t(contentDownLoad.content)}</div>

                        <div className={cx('download-app')}>
                            <div className={cx('scan-qr')}>
                                <QR show QRImage={contentDownLoad.QR}></QR>
                            </div>

                            <div className={cx('type-devices')}>
                                {contentDownLoad.devicesDownLoad.map((device, index) => (
                                    <div key={index} className={cx('wrapper-icon-device')}>
                                        {device.icon}
                                        <div>{device.title}</div>
                                    </div>
                                ))}
                            </div>

                            <div className={cx('device-option')}>
                                <IconDownload width="2rem" height="2rem" />
                                <div className={cx('device-option-content')}>{t('More Download Options')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketOverview;
