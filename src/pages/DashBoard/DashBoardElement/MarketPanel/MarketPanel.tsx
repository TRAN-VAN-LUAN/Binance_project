import classNames from 'classnames/bind';
import styles from './MarketPanel.module.scss';
import { storeMarket_Markets } from '../../../../store/storeMarketPanel';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { marketPanelShowEnum } from '../../../../enums/IDashBoard';
import { IconGrowth, IconOrderDefault } from '../../../../assets/Icon/icon';

const cx = classNames.bind(styles);

const MarketPanel = () => {
    const name = marketPanelShowEnum;
    const [showContent, setShowContent] = useState<string>(name.HOLDING);
    const [show, setShow] = useState<string>(name.MARKETS);
    const { t } = useTranslation(['DashBoard']);

    const handleShowHeader = (title: string) => {
        setShow(title);
    };

    const handleShowItem = (title: string) => {
        setShowContent(title);
    };

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
                    {show === name.MARKETS ? (
                        <div className={cx('wrapper-content')}>
                            <div className={cx('header')}>
                                {storeMarket_Markets.map((marketItem, index) => (
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
                                {storeMarket_Markets.map((marketItem) =>
                                    marketItem.title === showContent ? (
                                        <div
                                            className={cx(
                                                'wrapper-action',
                                                marketItem.large ? 'wrapper-coin-primary' : '',
                                            )}
                                        >
                                            {marketItem.titleAction?.map((titleIcon, index) => (
                                                <div className={cx('wrapper-title-action')} key={index}>
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
                                {storeMarket_Markets.map((marketItem) =>
                                    marketItem.title === showContent ? (
                                        <div className={cx('wrapper-coin')}>
                                            {marketItem.coin?.map((coinItem, index) => (
                                                <div
                                                    className={cx(
                                                        'wrapper-coin-item',
                                                        marketItem.large ? 'wrapper-coin-primary' : '',
                                                    )}
                                                >
                                                    <div key={index} className={cx('popular-coin')}>
                                                        <div className={cx('img-coin')}>
                                                            <img src={coinItem.img} />
                                                        </div>
                                                        <div className={cx('wrapper-popular-coin')}>
                                                            <span className={cx('title')}>
                                                                {coinItem.nameCoin?.name}
                                                            </span>
                                                            <span className={cx('sub')}>{coinItem.nameCoin?.sub}</span>
                                                        </div>
                                                    </div>

                                                    {coinItem.amount ? (
                                                        <div className={cx('wrapper-item')}>
                                                            <div className={cx('title')}>{coinItem.amount?.mount}</div>
                                                            <div className={cx('sub')}>{coinItem.amount?.sub}</div>
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    <div className={cx('wrapper-item')}>
                                                        <div className={cx('title')}>{coinItem.price?.price}</div>
                                                        <div className={cx('sub')}>{coinItem.price?.sub}</div>
                                                    </div>

                                                    <div className={cx('growth')}>
                                                        <div className={cx('growth-icon')}>
                                                            <IconGrowth />
                                                        </div>
                                                        <div className={cx('title')}>{coinItem.growth}</div>
                                                    </div>
                                                    <div className={cx('action')}>{coinItem.action}</div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <></>
                                    ),
                                )}
                            </>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MarketPanel;
