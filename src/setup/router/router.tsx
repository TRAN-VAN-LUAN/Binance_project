import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Login from '../../pages/Login/Login.tsx';
import { loginRouter, protectedRouter } from '../../utils/protectedRouter.ts';
import Layout from '../../layout/Layout';
import DashBoard from '../../pages/DashBoard/DashBoard';

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
                    },
                ],
            },
        ],
    },
]);
export default router;
