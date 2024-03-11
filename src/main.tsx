import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n.ts';
import { RouterProvider } from 'react-router-dom';
import router from './setup/router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
);
