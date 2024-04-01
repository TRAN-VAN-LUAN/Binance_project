import { marketPanelShowEnum as name } from '../enums/IDashBoard';

interface ITitleAction {
    title?: string;
    action?: boolean;
}

export interface ICoin {
    img?: string;
    nameCoin?: {
        name?: string;
        sub?: string;
    };
    amount?: {
        mount?: string;
        sub?: string;
    };
    price?: {
        price?: string;
        sub?: string;
    };
    growth?: string;
    action?: string;
}

export interface IStoreMarket {
    title: string;
    large?: boolean;
    titleAction?: ITitleAction[];
    coin?: ICoin[];
}

export const storeMarket_Discover: IStoreMarket[] = [
    {
        title: name.EARN,
        large: true,
        titleAction: [
            {
                title: 'Coins',
                action: true,
            },
            {
                title: 'Est.APR',
                action: true,
            },
            {
                title: 'Duration',
                action: true,
            },
            {
                title: 'Flexible APR',
                action: true,
            },
            {
                title: 'action',
                action: true,
            },
        ],
        coin: [
            {
                img: '/src/assets/img/bitcoin.png',
                nameCoin: {
                    name: 'BTCUSDT',
                    sub: 'Bitcoin',
                },
                amount: {
                    mount: '10.96% - 10.96%',
                },
                price: {
                    price: 'flexible / fixed',
                },
                growth: '10.96%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/ETH.png',
                nameCoin: {
                    name: 'ETHUSDT',
                    sub: 'Ethereum',
                },
                amount: {
                    mount: '0.91% - 8.90%',
                },
                price: {
                    price: 'flexible',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/BNB.png',
                nameCoin: {
                    name: 'BNBBTC',
                    sub: 'BNB',
                },
                amount: {
                    mount: '0.00',
                },
                price: {
                    price: 'flexible',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
        ],
    },
];

export const storeMarket_Markets: IStoreMarket[] = [
    {
        title: name.HOLDING,
        large: true,
        titleAction: [
            {
                title: 'Popular Coins',
                action: true,
            },
            {
                title: 'Amount',
                action: true,
            },
            {
                title: 'Coin Price',
                action: true,
            },
            {
                title: 'Growth (last 3 years)',
                action: false,
            },
            {
                title: 'action',
                action: false,
            },
        ],

        coin: [
            {
                img: '/src/assets/img/bitcoin.png',
                nameCoin: {
                    name: 'BTCUSDT',
                    sub: 'Bitcoin',
                },
                amount: {
                    mount: '0.00',
                    sub: '0.00',
                },
                price: {
                    price: '₫ 1,760,909,216',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/ETH.png',
                nameCoin: {
                    name: 'ETHUSDT',
                    sub: 'Ethereum',
                },
                amount: {
                    mount: '0.00',
                    sub: '0.00',
                },
                price: {
                    price: '₫ 91,299,824 ',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/BNB.png',
                nameCoin: {
                    name: 'BNBBTC',
                    sub: 'BNB',
                },
                amount: {
                    mount: '0.00',
                    sub: '0.00',
                },
                price: {
                    price: '₫ 14,880,430',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
        ],
    },
    {
        title: name.HOT,
        titleAction: [
            {
                title: 'Coins',
                action: true,
            },
            {
                title: 'Coin Price',
                action: true,
            },
            {
                title: '24h Change',
                action: true,
            },

            {
                title: 'action',
                action: false,
            },
        ],

        coin: [
            {
                img: '/src/assets/img/BNB.png',
                nameCoin: {
                    name: 'BNBBTC',
                    sub: 'BNB',
                },

                price: {
                    price: '₫ 14,880,430',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/bitcoin.png',
                nameCoin: {
                    name: 'BTCUSDT',
                    sub: 'Bitcoin',
                },

                price: {
                    price: '₫ 1,760,909,216',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/ETH.png',
                nameCoin: {
                    name: 'ETHUSDT',
                    sub: 'Ethereum',
                },

                price: {
                    price: '₫ 91,299,824 ',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/BNB.png',
                nameCoin: {
                    name: 'BNBBTC',
                    sub: 'BNB',
                },

                price: {
                    price: '₫ 14,880,430',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/BNB.png',
                nameCoin: {
                    name: 'HSRBTC',
                    sub: 'BNB',
                },

                price: {
                    price: '₫ 14,880,430',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/BNB.png',
                nameCoin: {
                    name: 'OAXETH',
                    sub: 'BNB',
                },

                price: {
                    price: '₫ 14,880,430',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/bitcoin.png',
                nameCoin: {
                    name: 'ETHUSDT',
                    sub: 'Bitcoin',
                },

                price: {
                    price: '₫ 1,760,909,216',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/ETH.png',
                nameCoin: {
                    name: 'ETHUSDT',
                    sub: 'Ethereum',
                },

                price: {
                    price: '₫ 91,299,824 ',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/BNB.png',
                nameCoin: {
                    name: 'BNBBTC',
                    sub: 'BNB',
                },

                price: {
                    price: '₫ 14,880,430',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
            {
                img: '/src/assets/img/BNB.png',
                nameCoin: {
                    name: 'BNBBTC',
                    sub: 'BNB',
                },

                price: {
                    price: '₫ 14,880,430',
                    sub: '0.00%',
                },
                growth: '0.00%',
                action: 'Cash In',
            },
        ],
    },
    {
        title: name.NEW_LISTING,
        large: true,
        titleAction: [
            {
                title: 'Coin',
                action: true,
            },

            {
                title: 'Coin Price',
                action: true,
            },
            {
                title: '24H Change',
                action: true,
            },
            {
                title: 'Date Listed',
                action: false,
            },
            {
                title: 'action',
                action: false,
            },
        ],

        coin: [
            {
                img: '/src/assets/img/bitcoin.png',
                nameCoin: {
                    name: 'BTCUSDT',
                    sub: 'Bitcoin',
                },

                price: {
                    price: '₫ 1,760,909,216',
                    sub: '0.00%',
                },

                amount: {
                    mount: '+12.00%',
                    sub: '0.00',
                },

                growth: '2024-03-16',
                action: 'Trade',
            },
        ],
    },
    {
        title: name.FAVORITE,
        titleAction: [
            {
                title: 'Popular Coins',
                action: true,
            },

            {
                title: 'Coin Price',
                action: true,
            },
            {
                title: '24H Change',
                action: true,
            },
            {
                title: 'action',
                action: false,
            },
        ],
    },
    {
        title: name.TOP_GARINES,
        titleAction: [
            {
                title: 'Coins',
                action: true,
            },
            {
                title: 'Coin Price',
                action: true,
            },
            {
                title: '24h Change',
                action: true,
            },

            {
                title: 'action',
                action: false,
            },
        ],

        coin: [
            {
                img: '/src/assets/img/ETH.png',
                nameCoin: {
                    name: 'BTCUSDT',
                    sub: 'Bitcoin',
                },

                price: {
                    price: '₫ 1,760,909,216',
                    sub: '0.00%',
                },
                growth: '+2.18%',
                action: 'Trade',
            },
        ],
    },
    {
        title: name.VOLUME,
        titleAction: [
            {
                title: 'Coin',
                action: true,
            },

            {
                title: 'Coin Price',
                action: true,
            },
            {
                title: '24H Change',
                action: true,
            },

            {
                title: 'action',
                action: false,
            },
        ],

        coin: [
            {
                img: '/src/assets/img/bitcoin.png',
                nameCoin: {
                    name: 'BTCUSDT',
                    sub: 'Bitcoin',
                },

                price: {
                    price: '₫ 1,760,909,216',
                    sub: '0.00%',
                },

                growth: '0.00%',

                action: 'Cash In',
            },
        ],
    },
];

export const storePriceCoinOverview = [
    {
        img: '/src/assets/img/bitcoin.png',
        nameCoin: {
            name: 'BTCUSDT',
            sub: 'Bitcoin',
        },

        price: {
            price: 'flexible / fixed',
        },
        growth: '10.96%',
    },
    {
        img: '/src/assets/img/ETH.png',
        nameCoin: {
            name: 'ETHUSDT',
            sub: 'Ethereum',
        },

        price: {
            price: 'flexible',
        },
        growth: '0.00%',
    },
    {
        img: '/src/assets/img/BNB.png',
        nameCoin: {
            name: 'BNBBTC',
            sub: 'BNB',
        },

        price: {
            price: 'flexible',
        },
        growth: '0.00%',
    },
];
