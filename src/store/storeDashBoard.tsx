import {
    IconAccount,
    IconHome,
    IconSetting,
    IconArrowRight,
    IconCard,
    IconCoppy,
    IconDiamond,
    IconToolTipsWarp,
    IconWallet,
    IconList,
    IconSpot,
} from '../assets/Icon/icon';
import { IDashBoard } from '../models/dashboard/IDashBoard';

// If have API User -> load data into dashBoardItemHeader.item
export const dashBoardItemHeader = [
    {
        title: 'userId',
        item: '856404097',
        icon: <IconCoppy />,
    },
    {
        title: 'viplevel',
        item: 'Regular User',
        icon: <IconArrowRight />,
    },
    {
        title: 'usertype',
        item: 'Enterprise',
    },
    {
        title: 'following',
        item: '0',
    },
    {
        title: 'follower',
        item: '0',
    },
];

export const dashBoardVoucher = [
    {
        id: 1,
        name: 'verify',
        subTitle: 'Verify Account',
        price: '20 USDT',
        active: {
            subTitle1: 'Verify Your Identity to Get ',
            subTextPrimary: '20 USDT',
            subTitle2: ' Trading Fee Rebate Voucher',
            time: 'May 17, 2024 15:37:25',
            state: 'verify',
        },
    },
    {
        id: 2,
        name: 'deposit',
        subTitle: 'Deposit 10 USDT',
        price: '20 USDT',
        active: {
            subTitle1: 'Buy or deposit 10 USDT to Get ',
            subTextPrimary: '30 USDT',
            subTitle2: '  Trading Fee Rebate Voucher',
            time: 'May 17, 2024 15:37:25',
            state: 'pending',
        },
    },
    {
        id: 3,
        name: 'trade',
        subTitle: 'Trade 10 USDT',
        price: '20 USDT',
        active: {
            subTitle1: 'Trade at least 10 USDT worth of any crypto to Get',
            subTextPrimary: '50 USDT',
            subTitle2: 'Trading Fee Rebate Voucher',
            time: 'May 17, 2024 15:37:25',
            state: 'pending',
        },
    },
];

export const StoreDashBoardUser = [
    {
        icon: <IconCard />,
        title: 'unverified',
    },
    {
        icon: <IconDiamond />,
        title: 'regularuser',
    },
    {
        icon: <IconToolTipsWarp />,
        title: 'linktwitter',
    },
];

export const DashBoard: IDashBoard[] = [
    {
        title: 'dashboard',
        icon: <IconHome />,
        path: '/',
    },
    {
        title: 'assets',
        icon: <IconWallet />,
        children: [
            {
                title: 'overview',
                path: 'wallet/overview',
            },
            {
                title: 'spot',
                path: 'wallet/account',
            },
            {
                title: 'margin',
                path: '/',
            },
        ],
    },
    {
        title: 'account',
        icon: <IconAccount />,
        children: [
            {
                title: 'indentifycation',
                path: 'profile/enterprise',
            },
            {
                title: 'security',
                path: 'security',
            },
        ],
    },
    {
        title: 'setting',
        icon: <IconSetting />,
        path: 'settings/preference',
    },
];

export const DashBoardWalletDropDown = [
    {
        title: 'overview',
        icon: <IconList />,
        path: 'wallet/overview',
    },
    {
        title: 'spot',
        icon: <IconSpot />,
        path: 'wallet/account',
    },
    {
        title: 'margin',
        icon: <IconList />,
        path: '/',
    },
];

export const EstimateBalance = {
    id: 1,
    money: 0.0,
};
