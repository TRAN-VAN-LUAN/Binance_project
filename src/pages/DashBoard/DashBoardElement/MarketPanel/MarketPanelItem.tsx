import { ICoin, IStoreMarket } from '../../../../store/storeMarketPanel';
import classNames from 'classnames/bind';
import styles from './MarketPanel.module.scss';
import { ICoins } from '../../../../slice/coinSlice';
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { numberWithCommas } from './MarketPanel';
import { IconGrowth } from '../../../../assets/Icon/icon';
import { getCoinApi } from '../../../../services/coinApI';

const cx = classNames.bind(styles);

interface PropsMarketsPanel {
    data?: IStoreMarket[];
    dataCoinMarket?: ICoin[];
    showContent?: string;
}

const MarketPanelItem = (props: PropsMarketsPanel) => {
    let { data, dataCoinMarket, showContent } = props;
    let dataCoin: ICoins[] = useSelector((state: RootState) => state.coin.listCoin);
    const dispatch = useAppDispatch();
    const [dataCoinApi, setDataCoinApi] = useState<ICoins[]>(dataCoin);

    useEffect(() => {
        const callCoinApi = setInterval(() => {
            // dispatch(getCoinApi());
        }, 120000);
        return () => clearInterval(callCoinApi);
    }, []);

    useEffect(() => {
        setDataCoinApi(dataCoin);
    }, [dataCoin]);

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
                            <div key={index} className={cx('wrapper-coin-item', 'wrapper-panel')}>
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
                                        <>{console.log(priceCoin)}</>
                                    ),
                                )}
                            </div>
                        ))}
                </div>
            )}
        </>
    );
};
export default MarketPanelItem;
