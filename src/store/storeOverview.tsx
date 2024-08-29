import { IconBook, IconLinux, IconMasOS, IconWindows, ImageQR } from '../assets/Icon/icon';
import { storePriceCoinOverview } from './storeMarketPanel';

export const storeLayoutOverview = {
    contentInfo: {
        titlePrimary: 'Get Verified',
        text: 'and Start Your Crypto Journey',

        actionPrimary: {
            title: 'verify_now',
        },

        actionDefault: {
            icon: <IconBook />,
            title: 'read_tutorial',
        },
    },

    contentCoinPrice: {
        coin: storePriceCoinOverview,
        content: [
            'The Great Binance Eggdrop Launches $200,000 USD in BTC Prizes to Be Won',
            'Get ready for tax time with Binance New Zealand',
            'VIP Invitation Program Promotion: Unlock VIP+1 Level Upgrade',
        ],

        time: 'april 17, 2024 15:37:25',
    },

    contentDevices: {
        deskTop: {
            title: 'Desktop',
            img: '/src/assets/img/download-desktop-dark-en.png',
        },
        lite: {
            title: 'Lite',
            img: '/src/assets/img/download-lite-dark-en.svg',
        },
        pro: {
            title: 'Pro',
            img: '/src/assets/img/download-pro-dark-en.svg',
        },
    },

    contentDownLoad: {
        content: 'Trade on the go. Anywhere, anytime.',
        QR: <ImageQR />,
        contentDownLoad: {
            header: 'Scan to Download the App',
            devices: 'iOS and Android',
        },

        devicesDownLoad: [
            {
                title: 'MasOS',
                icon: <IconMasOS />,
            },
            {
                title: 'Windows',
                icon: <IconWindows />,
            },
            {
                title: 'Linux',
                icon: <IconLinux />,
            },
        ],
    },
};
