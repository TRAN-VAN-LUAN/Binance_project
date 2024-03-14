import { IconArrowRight, IconCoppy } from '../assets/Icon/icon';

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
        subTitle: 'verifyaccount',
        price: '20 USDT',
        active: {
            subTitle1: 'Verify Your Identity to Get ',
            subTextPrimary: '20 USDT',
            subTitle2: ' Trading Fee Rebate Voucher',
            time: '5',
            state: 'verify',
        },
    },
    {
        id: 2,
        name: 'deposit',
        subTitle: 'deposit10USDT',
        price: '20 USDT',
        active: {
            subTitle1: 'Buy or deposit 10 USDT to Get ',
            subTextPrimary: '30 USDT',
            subTitle2: '  Trading Fee Rebate Voucher',
            time: '5',
            state: 'pending',
        },
    },
    {
        id: 3,
        name: 'trade',
        subTitle: 'trade10USDT',
        price: '20 USDT',
        active: {
            subTitle1: 'Trade at least 10 USDT worth of any crypto to Get',
            subTextPrimary: '50 USDT',
            subTitle2: 'Trading Fee Rebate Voucher',
            time: '5',
            state: 'pending',
        },
    },
];
