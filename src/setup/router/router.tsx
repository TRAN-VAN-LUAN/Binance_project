import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
// import Login from '../../pages/Login/Login.tsx';
import { loginRouter, protectedRouter } from '../../utils/protectedRouter.ts';
import Layout from '../../layout/Layout';
// import DashBoard from '../../pages/DashBoard/DashBoard';
// import MarketOverview from '../../pages/MarketOverview/MarketOverview.tsx';
// import ContentDefaultDashBoard from '../../pages/DashBoard/ContentDefaultDashBoard.tsx';
// import DashBoardOverview from '../../pages/DashBoard/wallet/DashBoardOverview.tsx';
// import DashBoardAccount from '../../pages/DashBoard/wallet/DashBoardAccount.tsx';
// import Indentifycation from '../../pages/DashBoard/Spot/Indentifycation.tsx';
// import Sercurity from '../../pages/DashBoard/Spot/Sercurity.tsx';
// import CryptoPrices from '../../pages/CryptoPrices/CryptoPrices.tsx';
import React from 'react';

const Login = React.lazy(() => import('../../pages/Login/login.tsx'));
const ContentDefaultDashBoard = React.lazy(() => import('../../pages/DashBoard/ContentDefaultDashBoard.tsx'));
const DashBoard = React.lazy(() => import('../../pages/DashBoard/DashBoard.tsx'));
const MarketOverview = React.lazy(() => import('../../pages/MarketOverview/MarketOverview.tsx'));
const DashBoardOverview = React.lazy(() => import('../../pages/DashBoard/wallet/DashBoardOverview.tsx'));
const DashBoardAccount = React.lazy(() => import('../../pages/DashBoard/wallet/DashBoardAccount.tsx'));
const Indentifycation = React.lazy(() => import('../../pages/DashBoard/Spot/Indentifycation.tsx'));
const Sercurity = React.lazy(() => import('../../pages/DashBoard/Spot/Sercurity.tsx'));
const CryptoPrices = React.lazy(() => import('../../pages/CryptoPrices/CryptoPrices.tsx'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: 'login',
                        loader: loginRouter,
                        element: <Login />,
                    },
                    {
                        path: '/',
                        loader: protectedRouter,
                        element: <DashBoard />,
                        children: [
                            {
                                index: true,
                                element: <ContentDefaultDashBoard />,
                            },
                            {
                                path: 'wallet/overview',
                                element: <DashBoardOverview />,
                            },
                            {
                                path: 'wallet/account',
                                element: <DashBoardAccount />,
                            },
                            {
                                path: 'profile/enterprise',
                                element: <Indentifycation />,
                            },
                            {
                                path: 'security',
                                element: <Sercurity />,
                            },
                            {
                                path: 'settings/preference',
                                element: <Sercurity />,
                            },
                        ],
                    },
                    {
                        path: 'overview',
                        loader: protectedRouter,
                        element: <MarketOverview />,
                    },
                    {
                        path: 'crypto',
                        loader: protectedRouter,
                        element: <CryptoPrices />,
                    },
                ],
            },
        ],
    },
]);
export default router;
