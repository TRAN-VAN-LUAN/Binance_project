import classNames from 'classnames/bind';
import styles from './MarketPanel.module.scss';
import { IStoreMarket, storeMarket_Discover, storeMarket_Markets } from '../../../../store/storeMarketPanel';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { marketPanelShowEnum } from '../../../../enums/IDashBoard';
import { IconGrowth, IconOrderDefault } from '../../../../assets/Icon/icon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ICoins } from '../../../../slice/coinSlice';

const cx = classNames.bind(styles);

const MarketPanel = () => {
    const name = marketPanelShowEnum;
    const [showContent, setShowContent] = useState<string>(name.HOLDING);
    const [show, setShow] = useState<string>(name.MARKETS);
    const { t } = useTranslation(['DashBoard']);
    const [dataMarket, setDataMarket] = useState<IStoreMarket[]>(storeMarket_Markets);
    let dataCoin: ICoins[] = useSelector((state: RootState) => state.coin.listCoin);

    const [dataCoinApi, setDataCoinApi] = useState<ICoins[]>(dataCoin);

    console.log(dataCoinApi);
    console.log(dataCoin);
    const handleShowHeader = (title: string) => {
        setShow(title);
        setDataMarket(title === name.MARKETS ? storeMarket_Markets : storeMarket_Discover);
        setShowContent(title === name.MARKETS ? name.HOLDING : name.EARN);
    };

    const handleShowItem = (title: string) => {
        setShowContent(title);
    };

    const numberWithCommas = (number: number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    useEffect(() => {
        const callCoinApi = setInterval(() => {}, 10000);
        return () => clearInterval(callCoinApi);
    }, []);

    useEffect(() => {
        setDataCoinApi(dataCoin);
    }, [dataCoin]);

    return (
        <div className={cx('main-container')}>
            <div className={cx('container')}>
                <div className={cx('wrapper-markets')}>
                    <div className={cx('wrapper-title')}>
                        <div
                            onClick={() => handleShowHeader(name.MARKETS)}
                            className={cx('title-primary', show === name.MARKETS ? 'color-active' : '')}
                        >
                            {t('Markets')}
                        </div>
                        <div
                            onClick={() => handleShowHeader(name.DISCOVER)}
                            className={cx('title-primary', show === name.DISCOVER ? 'color-active' : '')}
                        >
                            {t('Discover')}
                        </div>
                    </div>
                    {/* {show === name.MARKETS ? ( */}
                    <div className={cx('wrapper-content')}>
                        <div className={cx('header')}>
                            {dataMarket.map((marketItem, index) => (
                                <div
                                    onClick={() => handleShowItem(marketItem.title)}
                                    key={index}
                                    className={cx(
                                        'action-title',
                                        showContent === marketItem.title ? 'color-active' : '',
                                    )}
                                >
                                    {t(marketItem.title)}
                                </div>
                            ))}
                        </div>
                        <>
                            {dataMarket.map((marketItem) =>
                                marketItem.title === showContent ? (
                                    <div
                                        className={cx('wrapper-action', marketItem.large ? 'wrapper-coin-primary' : '')}
                                    >
                                        {marketItem.titleAction?.map((titleIcon, index) => (
                                            <div className={cx('wrapper-title-action', titleIcon.title)} key={index}>
                                                {titleIcon.title}
                                                {titleIcon.action ? (
                                                    <span className={cx('icon-order')}>
                                                        <IconOrderDefault />
                                                    </span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <></>
                                ),
                            )}
                        </>

                        <>
                            {dataMarket.map((marketItem) =>
                                marketItem.title === showContent ? (
                                    <div className={cx('wrapper-coin')}>
                                        {marketItem.coin?.map((coinItem, index) => (
                                            <div
                                                key={index}
                                                className={cx(
                                                    'wrapper-coin-item',
                                                    marketItem.large ? 'wrapper-coin-primary' : '',
                                                )}
                                            >
                                                {dataCoinApi.map((priceCoin, index) =>
                                                    priceCoin.symbol === coinItem.nameCoin?.name ? (
                                                        <>
                                                            <div key={index} className={cx('popular-coin')}>
                                                                <div className={cx('img-coin')}>
                                                                    <img src={coinItem.img} />
                                                                </div>
                                                                <div className={cx('wrapper-popular-coin')}>
                                                                    <span className={cx('title')}>
                                                                        {coinItem.nameCoin?.name}
                                                                    </span>
                                                                    <span className={cx('sub')}>
                                                                        {coinItem.nameCoin?.sub}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {coinItem.amount ? (
                                                                <div className={cx('wrapper-item', 'amount')}>
                                                                    <div className={cx('title')}>
                                                                        {coinItem.amount?.mount}
                                                                    </div>
                                                                    <div className={cx('sub')}>
                                                                        {coinItem.amount?.sub}
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <></>
                                                            )}

                                                            <div className={cx('wrapper-item')}>
                                                                <div className={cx('title')}>
                                                                    {numberWithCommas(
                                                                        parseFloat(
                                                                            priceCoin.askPrice
                                                                                ? priceCoin.askPrice
                                                                                : '',
                                                                        ),
                                                                    )}
                                                                </div>
                                                                <div className={cx('sub')}>
                                                                    {numberWithCommas(
                                                                        parseFloat(
                                                                            priceCoin.askPrice
                                                                                ? priceCoin.askPrice
                                                                                : '',
                                                                        ) * 23255,
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <div className={cx('growth')}>
                                                                <div className={cx('growth-icon')}>
                                                                    <IconGrowth />
                                                                </div>
                                                                <div className={cx('title')}>
                                                                    {priceCoin.priceChangePercent}%
                                                                </div>
                                                            </div>
                                                            <div className={cx('action')}>{coinItem.action}</div>
                                                        </>
                                                    ) : (
                                                        <></>
                                                    ),
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <></>
                                ),
                            )}
                        </>
                    </div>
                    {/* ) : (
                        <></>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default MarketPanel;
