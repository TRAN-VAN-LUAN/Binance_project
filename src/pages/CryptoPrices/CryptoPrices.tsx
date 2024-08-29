import classNames from 'classnames/bind';
import styles from './CryptoPrices.module.scss';
import { Chart } from 'primereact/chart';
import BreadCrumb, { IItemBreadCrumb } from '../../layout/AppBreadCrum/BreadCrumb';
import { Button } from '../../component/Button/Button';
import { IconShare } from '../../assets/Icon/icon';
import { useTranslation } from 'react-i18next';
import { AuthData } from '../../layout/context/layoutContext';
import Input from '../../component/Input/Input';
import { useEffect, useRef, useState } from 'react';
import { numberWithCommas, stringtoNumber } from '../DashBoard/DashBoardElement/MarketPanel/MarketPanel';
import { getCurrentCoinFromLocalStorage } from '../../utils/auth';
import { ICoin } from '../../store/storeMarketPanel';
import { RootState, useAppDispatch } from '../../store';
import { getCoinPriceByName } from '../../services/coinApI';
import { useSelector } from 'react-redux';
import { ICoinChart } from '../../slice/coinSlice';
import ChartComp from '../../component/Chart';

const cx = classNames.bind(styles);
const home: IItemBreadCrumb = { label: 'Home', url: '/' };
const item: IItemBreadCrumb[] = [{ label: 'Crypto prices', url: '/' }];

const CryptoPrices = () => {
    const { t } = useTranslation(['CryptoPrice']);
    const { theme } = AuthData();
    const coinItem: ICoin = getCurrentCoinFromLocalStorage();
    const [amountCoin, setAmountPrice] = useState<number>(1);
    const coinDetail: ICoinChart[] = useSelector((state: RootState) => state.coin.listDetailACoin);
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    console.log(coinDetail);

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const handleChangeAmountCoin = () => {
        const inputValue = inputRef.current?.value;
        if (inputValue) {
            const parsedValue = parseInt(inputValue);
            if (!isNaN(parsedValue)) {
                setAmountPrice(parsedValue);
            }
        } else {
            setAmountPrice(0);
        }
    };

    let dataset = coinDetail.map((item) => item.price);
    console.log(dataset);

    useEffect(() => {
        dispatch(getCoinPriceByName());
    }, []);

    useEffect(() => {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: dataset,
                    fill: false,
                    borderColor: '#555555',
                    tension: 0.4,
                },
            ],
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: '#000000',
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: 'red',
                    },
                    grid: {
                        color: 'yellow',
                    },
                },
                y: {
                    ticks: {
                        color: 'orange',
                    },
                    grid: {
                        color: 'white',
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, [inputRef]);

    return (
        <div className={cx('main-container', theme)}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <BreadCrumb item={item} home={home} coin={coinItem?.nameCoin?.name} />
                    <div className={cx('wrapper-btn-share')}>
                        <Button leftIcon={<IconShare />} active>
                            {t('share')}
                        </Button>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-chart')}>
                        <div className={cx('chart-header')}>
                            <div className={cx('img-coin')}>
                                <img src={coinItem?.img} alt="coin" />
                            </div>
                            {coinItem?.nameCoin?.name} {t('Price')}
                            <span>({coinItem?.nameCoin?.sub})</span>
                        </div>
                        <div className={cx('content-price')}>
                            <div className={cx('price')}>$ {coinItem?.price?.price}</div>
                            <div className={cx('price-sub')}>{coinItem?.growth}%</div>
                        </div>
                        <div className={cx('card')}>
                            <ChartComp />
                            {/* <Chart type="line" data={chartData} options={chartOptions} /> */}
                        </div>
                    </div>

                    <div className={cx('content-buy')}>
                        <div className={cx('content-buy-header')}>
                            <div className={cx('buy-coin')}>{t('Buy BTC')}</div>
                            <div className={cx('trade-coin')}>{t('Trade BTC')}</div>
                        </div>
                        <div className={cx('content-detail')}>
                            <div className={cx('content-item')}>
                                <div className={cx('content-detail-title')}>{t('Buy')}</div>
                                <div className={cx('content-detail-price')}>
                                    <Input
                                        className={cx('content-input')}
                                        type="number"
                                        outline
                                        value={amountCoin === 0 ? undefined : amountCoin}
                                        ref={inputRef}
                                        onChange={() => handleChangeAmountCoin()}
                                        placeholder="0.00"
                                    ></Input>
                                    <div className={cx('bitcoin')}>
                                        <img src={coinItem?.img} alt="bitcoin" />
                                        <span>BTC</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('price-bitcoin')}>
                                <div className={cx('show-price')}>{amountCoin} BTC =</div>
                                <div className={cx('currency-coin')}>
                                    USD $
                                    {coinItem?.price?.price &&
                                        amountCoin &&
                                        numberWithCommas(parseFloat(stringtoNumber(coinItem.price.price)) * amountCoin)}
                                </div>
                            </div>
                            <div className={cx('btn-buyBTC')}>
                                <Button primary large>
                                    {t('Buy BTC')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoPrices;
