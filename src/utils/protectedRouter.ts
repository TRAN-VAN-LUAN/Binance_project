import { redirect } from 'react-router-dom';
import { getAccessTokenFromLocalStorage } from './auth';

export const protectedRouter = () => {
    if (!getAccessTokenFromLocalStorage()) {
        console.log(getAccessTokenFromLocalStorage());
        return redirect('login');
    }
    return null;
};

export const loginRouter = () => {
    if (getAccessTokenFromLocalStorage()) {
        console.log(getAccessTokenFromLocalStorage());
        return redirect('/');
    }
    return null;
};
