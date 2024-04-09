import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Login from '../../pages/Login/Login.tsx';
import { loginRouter, protectedRouter } from '../../utils/protectedRouter.ts';
import Layout from '../../layout/Layout';
import DashBoard from '../../pages/DashBoard/DashBoard';
import MarketOverview from '../../pages/MarketOverview/MarketOverview.tsx';
import ContentDefaultDashBoard from '../../pages/DashBoard/ContentDefaultDashBoard.tsx';
import DashBoardOverview from '../../pages/DashBoard/wallet/DashBoardOverview.tsx';
import DashBoardAccount from '../../pages/DashBoard/wallet/DashBoardAccount.tsx';
import Indentifycation from '../../pages/DashBoard/Spot/Indentifycation.tsx';
import Sercurity from '../../pages/DashBoard/Spot/Sercurity.tsx';
import CryptoPrices from '../../pages/CryptoPrices/CryptoPrices.tsx';

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
