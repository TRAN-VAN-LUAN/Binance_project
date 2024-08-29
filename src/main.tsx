import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n.ts';
import { RouterProvider } from 'react-router-dom';
import router from './setup/router/router.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    </Provider>,
);
