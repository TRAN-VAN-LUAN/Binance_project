import classNames from 'classnames/bind';
import styles from './MarketPanel.module.scss';
import { IStoreMarket, storeMarket_Discover, storeMarket_Markets } from '../../../../store/storeMarketPanel';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { marketPanelShowEnum } from '../../../../enums/IDashBoard';
import { IconOrderDefault } from '../../../../assets/Icon/icon';
import MarketPanelItem from './MarketPanelItem';

const cx = classNames.bind(styles);

export const numberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const MarketPanel = () => {
    const name = marketPanelShowEnum;
    const [showContent, setShowContent] = useState<string>(name.HOLDING);
    const [show, setShow] = useState<string>(name.MARKETS);
    const { t } = useTranslation(['DashBoard']);
    const [dataMarket, setDataMarket] = useState<IStoreMarket[]>(storeMarket_Markets);

    const handleShowHeader = (title: string) => {
        setShow(title);
        setDataMarket(title === name.MARKETS ? storeMarket_Markets : storeMarket_Discover);
        setShowContent(title === name.MARKETS ? name.HOLDING : name.EARN);
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
                            {t(name.MARKETS)}
                        </div>
                        <div
                            onClick={() => handleShowHeader(name.DISCOVER)}
                            className={cx('title-primary', show === name.DISCOVER ? 'color-active' : '')}
                        >
                            {t(name.DISCOVER)}
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
                        <MarketPanelItem data={dataMarket} showContent={showContent}></MarketPanelItem>
                        <></>
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
