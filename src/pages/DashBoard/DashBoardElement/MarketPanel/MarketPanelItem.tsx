import { ICoin, IStoreMarket } from '../../../../store/storeMarketPanel';
import classNames from 'classnames/bind';
import styles from './MarketPanel.module.scss';
import { ICoins } from '../../../../slice/coinSlice';
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { numberWithCommas } from './MarketPanel';
import { IconGrowth } from '../../../../assets/Icon/icon';
import { getCoinApi, getCoinPriceByName } from '../../../../services/coinApI';

const cx = classNames.bind(styles);

interface PropsMarketsPanel {
    data?: IStoreMarket[];
    dataCoinMarket?: ICoin[];
    showContent?: string;
    setShowCrypto?: (data: ICoin) => void;
}

const MarketPanelItem = (props: PropsMarketsPanel) => {
    let { data, dataCoinMarket, showContent, setShowCrypto } = props;
    let dataCoin: ICoins[] = useSelector((state: RootState) => state.coin.listCoin);
    const dispatch = useAppDispatch();
    const [dataCoinApi, setDataCoinApi] = useState<ICoins[]>(dataCoin);

    console.log(1);

    useEffect(() => {
        const callCoinApi = setInterval(() => {
            dispatch(getCoinApi());
        }, 6000000);
        return () => clearInterval(callCoinApi);
    }, []);

    useEffect(() => {
        setDataCoinApi(dataCoin);
    }, [dataCoin]);

    const setShowItem = (data: ICoin) => {
        dataCoin.map((coin) => {
            if (coin.symbol === data.nameCoin?.name) {
                data.price?.sub
                    ? (data.price.sub = numberWithCommas(parseFloat(coin.askPrice ? coin.askPrice : '') * 23255))
                    : '';
                data.price?.price
                    ? (data.price.price = numberWithCommas(parseFloat(coin.askPrice ? coin.askPrice : '')))
                    : '';
                data.growth ? (data.growth = coin.priceChangePercent) : '';

                dispatch(getCoinPriceByName());
            }
        });

        if (setShowCrypto) {
            const crypto = JSON.stringify(data);
            console.log(crypto);
            localStorage.setItem('crypto-detail', crypto);
            setShowCrypto(data);
        }
    };

    return (
        <>
            {!!data ? (
                data.map((marketItem) =>
                    marketItem.title === showContent ? (
                        <div className={cx('wrapper-coin')}>
                            {marketItem.coin?.map((coinItem, index) => (
                                <div
                                    key={index}
                                    className={cx('wrapper-coin-item', marketItem.large ? 'wrapper-coin-primary' : '')}
                                >
                                    {dataCoinApi.map((priceCoin, index) =>
                                        priceCoin.symbol === coinItem.nameCoin?.name ? (
                                            <>
                                                <div key={index} className={cx('popular-coin')}>
                                                    <div className={cx('img-coin')}>
                                                        <img src={coinItem.img} />
                                                    </div>
                                                    <div className={cx('wrapper-popular-coin')}>
                                                        <span className={cx('title')}>{coinItem.nameCoin?.name}</span>
                                                        <span className={cx('sub')}>{coinItem.nameCoin?.sub}</span>
                                                    </div>
                                                </div>

                                                {coinItem.amount ? (
                                                    <div className={cx('wrapper-item', 'amount')}>
                                                        <div className={cx('title')}>{coinItem.amount?.mount}</div>
                                                        <div className={cx('sub')}>{coinItem.amount?.sub}</div>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}

                                                <div className={cx('wrapper-item')}>
                                                    <div className={cx('title')}>
                                                        {numberWithCommas(
                                                            parseFloat(priceCoin.askPrice ? priceCoin.askPrice : ''),
                                                        )}
                                                    </div>
                                                    <div className={cx('sub')}>
                                                        {numberWithCommas(
                                                            parseFloat(priceCoin.askPrice ? priceCoin.askPrice : '') *
                                                                23255,
                                                        )}
                                                    </div>
                                                </div>

                                                <div className={cx('growth')}>
                                                    <div className={cx('growth-icon')}>
                                                        <IconGrowth />
                                                    </div>
                                                    <div className={cx('title')}>{priceCoin.priceChangePercent}%</div>
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
                )
            ) : (
                <div className={cx('wrapper-coin')}>
                    {!!dataCoinMarket &&
                        dataCoinMarket.map((coinItem, index) => (
                            <div
                                key={index}
                                onClick={() => setShowItem(coinItem)}
                                className={cx('wrapper-coin-item', 'wrapper-panel')}
                            >
                                {dataCoinApi.map((priceCoin, index) =>
                                    priceCoin.symbol === coinItem.nameCoin?.name ? (
                                        <>
                                            <div key={index} className={cx('popular-coin')}>
                                                <div className={cx('img-coin')}>
                                                    <img src={coinItem.img} />
                                                </div>
                                                <div className={cx('wrapper-popular-coin')}>
                                                    <span className={cx('title')}>{coinItem.nameCoin?.name}</span>
                                                    <span className={cx('sub')}>{coinItem.nameCoin?.sub}</span>
                                                </div>
                                            </div>

                                            {coinItem.amount ? (
                                                <div className={cx('wrapper-item', 'amount')}>
                                                    <div className={cx('title')}>{coinItem.amount?.mount}</div>
                                                    <div className={cx('sub')}>{coinItem.amount?.sub}</div>
                                                </div>
                                            ) : (
                                                <></>
                                            )}

                                            <div className={cx('wrapper-item')}>
                                                <div className={cx('title')}>
                                                    {numberWithCommas(
                                                        parseFloat(priceCoin.askPrice ? priceCoin.askPrice : ''),
                                                    )}
                                                </div>
                                                <div className={cx('sub')}>
                                                    {numberWithCommas(
                                                        parseFloat(priceCoin.askPrice ? priceCoin.askPrice : '') *
                                                            23255,
                                                    )}
                                                </div>
                                            </div>

                                            <div className={cx('growth')}>
                                                {/* <div className={cx('growth-icon')}>
                                                    <IconGrowth />
                                                </div> */}
                                                <div className={cx('title')}>{priceCoin.priceChangePercent}%</div>
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
            )}
        </>
    );
};
export default React.memo(MarketPanelItem);
