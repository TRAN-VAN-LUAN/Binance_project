import {
    IconDeposit,
    IconDownload,
    IconLanguage,
    IconSearch,
    IconUser,
    IconWallet,
    iconNotification,
} from '../../assets/Icon/icon';

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
        children: [{}],
    },
    {
        title: 'futures',
        children: [{}],
    },
    {
        title: 'earn',
        to: '/',
    },
    {
        title: 'square',
        children: [{}],
    },
    {
        title: 'more',
        children: [{}],
    },
];

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
        title: 'search',
        icon: IconSearch,
    },
    {
        title: 'wallet',
        icon: IconWallet,
    },
    {
        title: 'bell',
        icon: iconNotification,
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
