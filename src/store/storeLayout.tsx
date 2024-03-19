import {
    CopyTrading2C,
    IconBitcoint,
    IconChart,
    IconDeposit,
    IconDollar,
    IconDownload,
    IconEarn,
    IconLanguage,
    IconSearch,
    IconUser,
    IconWallet,
    Margin2C,
    Spot2C,
    TradingBot2C,
} from '../assets/Icon/icon';
import DropDownUser from '../component/Menu/DropDown/DropDownUser';
import DropDownWallet from '../component/Menu/DropDown/DropDownWallet';
import { IDropDown } from '../models/ILayout';

export const IconAction = [
    {
        title: 'search',
        icon: IconSearch,
        dropdown: '',
    },
    {
        title: 'deposit',
        button: {
            iconleft: <IconDeposit width="1.6rem" height="1.6rem" />,
            title: 'deposit',
        },
    },
    {
        title: 'user',
        icon: IconUser,
        dropdown: <DropDownUser />,
    },

    {
        title: 'wallet',
        icon: IconWallet,
        dropdown: <DropDownWallet />,
    },
    {
        title: 'QR',
        icon: IconDownload,
        dropdown: '',
    },
    {
        title: 'language',
        icon: IconLanguage,
        dropdown: '',
    },
];

export const INavDraw = [
    {
        title: 'buycrypto',
        icon: IconBitcoint,
    },
    {
        title: 'markets',
        icon: IconChart,
    },
    {
        title: 'earn',
        icon: IconEarn,
    },
    {
        title: 'download',
        icon: IconDownload,
    },
    {
        title: 'english',
        icon: IconLanguage,
    },
    {
        title: 'usd',
        icon: IconDollar,
    },
];

export const IDropDownTradeBasic: IDropDown[] = [
    {
        icon: <Spot2C />,
        title: 'Spot',
        body: 'Buy and sell on the Spot market with advanced tools',
    },
    {
        icon: <Margin2C />,
        title: 'Margin',
        body: 'Increase your profits with leverage',
    },
];

export const IDropDownTradeAdvanced: IDropDown[] = [
    {
        icon: <TradingBot2C />,
        title: 'Trading Bots',
        body: 'Trade smarter with our various automated strategies - easy, fast and reliable',
    },
    {
        icon: <CopyTrading2C />,
        title: 'Copy Trading',
        body: 'Follow the most popular traders',
    },
];

export const NAV = [
    {
        title: 'buycrypto',
        to: '/',
    },
    {
        title: 'markets',
        to: '/',
    },
    {
        title: 'trade',
        children: { contentFirst: IDropDownTradeBasic, contentRight: IDropDownTradeAdvanced },
    },
    // {
    //     title: 'futures',
    //     children: { contentFirst: IDropDownTradeBasic, contentRight: IDropDownTradeAdvanced },
    // },

    // {
    //     title: 'square',
    //     children: { contentFirst: IDropDownTradeBasic, contentRight: IDropDownTradeAdvanced },
    // // },
    // {
    //     title: 'more',
    //     children: { contentFirst: IDropDownTradeBasic, contentRight: IDropDownTradeAdvanced },
    // },
];
