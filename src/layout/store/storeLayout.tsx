import {
    CopyTrading2C,
    IconDeposit,
    IconDownload,
    IconLanguage,
    IconSearch,
    IconUser,
    IconWallet,
    Margin2C,
    Spot2C,
    TradingBot2C,
    iconAccount,
    iconHome,
    iconSetting,
} from '../../assets/Icon/icon';
import { IDropDown } from '../../models/ILayout';

export const IconAction = [
    {
        title: 'search',
        icon: IconSearch,
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
    },

    {
        title: 'wallet',
        icon: IconWallet,
    },
    {
        title: 'download',
        icon: IconDownload,
    },
    {
        title: 'language',
        icon: IconLanguage,
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

export const DashBoard = [
    {
        title: 'DashBoard',
        icon: iconHome,
    },
    {
        title: 'Assets',
        icon: IconWallet,
        children: [
            {
                title: 'overview',
            },
            {
                title: 'spot',
            },
            {
                title: 'margin',
            },
        ],
    },
    {
        title: 'Account',
        icon: iconAccount,
        children: [
            {
                title: 'indentification',
            },
            {
                title: 'Security',
            },
        ],
    },
    {
        title: 'Setting',
        icon: iconSetting,
    },
];
