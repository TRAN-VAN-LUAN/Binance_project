import {
    IconCoinMarketCap,
    IconDiscord,
    IconFaceBook,
    IconIntergram,
    IconReddit,
    IconTelegram,
    IconTikTok,
    IconTwiter,
    IconYoutube,
} from '../assets/Icon/icon';

interface IItemChildrenFooter {
    title?: string;

    link?: string;
}

interface IStoreFooter {
    title: string;
    children?: IItemChildrenFooter[];
}

export const StoreFooterIcon = [
    {
        title: 'Community',
        children: [
            {
                icon: <IconDiscord />,
                link: 'https://discord.gg/jE4wt8g2H2',
            },
            {
                icon: <IconTelegram />,
                link: 'https://www.binance.com/en-NZ/community',
            },
            {
                icon: <IconTikTok />,
                link: 'https://www.tiktok.com/@binance?lang=en',
            },
            {
                icon: <IconFaceBook />,
                link: 'https://www.facebook.com/binance',
            },
            {
                icon: <IconTwiter />,
                link: 'https://twitter.com/binance',
            },
            {
                icon: <IconReddit />,
                link: 'https://www.reddit.com/r/binance',
            },
            {
                icon: <IconIntergram />,
                link: 'https://www.instagram.com/Binance/',
            },
            {
                icon: <IconCoinMarketCap />,
                link: 'https://coinmarketcap.com/exchanges/binance/',
            },
            {
                icon: <IconYoutube />,
                link: 'https://www.youtube.com/binanceyoutube',
            },
        ],
    },
];

export const StoreFooter: IStoreFooter[] = [
    {
        title: 'About Us',
        children: [
            {
                title: 'About',
                link: '',
            },
            {
                title: 'Business Contacts',
                link: '',
            },
            {
                title: 'Careers',
                link: '',
            },
            {
                title: 'Announcements',
                link: '',
            },
            {
                title: 'News',
                link: '',
            },
            {
                title: 'Press',
                link: '',
            },
            {
                title: 'Legal',
                link: '',
            },
            {
                title: 'Building Trust',
                link: '',
            },
        ],
    },
    {
        title: 'Products',
        children: [
            {
                title: 'Exchange',
                link: '',
            },
            {
                title: 'Buy Crypto',
                link: '',
            },
            {
                title: 'Pay',
                link: '',
            },
            {
                title: 'Academy',
                link: '',
            },
            {
                title: 'Live',
                link: '',
            },
            {
                title: 'Tax',
                link: '',
            },
            {
                title: 'NFT',
                link: '',
            },
            {
                title: 'BABT',
                link: '',
            },
        ],
    },

    {
        title: 'Support',
        children: [
            {
                title: '24/7 Chat Support',
                link: '',
            },
            {
                title: 'Support Center',
                link: '',
            },
            {
                title: 'Product Feedback & Suggestions',
                link: '',
            },
            {
                title: 'Fees',
                link: '',
            },
            {
                title: 'Binance Verify',
                link: '',
            },
        ],
    },
    {
        title: 'Learn',
        children: [
            {
                title: 'Learn & Earn',
                link: '',
            },
            {
                title: 'Browse Crypto Prices',
                link: '',
            },
            {
                title: 'Bitcoin Price',
                link: '',
            },
            {
                title: 'Ethereum Price',
                link: '',
            },
            {
                title: 'Browse Crypto Price Predictions',
                link: '',
            },
            {
                title: 'Bitcoin Price Prediction',
                link: '',
            },
            {
                title: 'Ethereum Price Prediction',
                link: '',
            },
        ],
    },
    {
        title: 'Business',
        children: [
            {
                title: 'P2P Merchant Application',
                link: '',
            },
            {
                title: 'P2Pro Merchant Application',
                link: '',
            },
            {
                title: 'Listing Application',
                link: '',
            },
            {
                title: 'Institutional & VIP Services',
                link: '',
            },
        ],
    },
    {
        title: 'Service',
        children: [
            {
                title: 'Downloads',
                link: '',
            },
            {
                title: 'Desktop Application',
                link: '',
            },
            {
                title: 'Affiliate',
                link: '',
            },
            {
                title: 'Referral',
                link: '',
            },
            {
                title: 'OTC Trading',
                link: '',
            },
        ],
    },
];
