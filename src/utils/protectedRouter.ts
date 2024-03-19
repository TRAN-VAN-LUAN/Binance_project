import { redirect } from 'react-router-dom';
import { getAccessFromLocalStorage } from './auth';

export const protectedRouter = () => {
    if (!getAccessFromLocalStorage()) {
        return redirect('login');
    }
    return null;
};

export const loginRouter = () => {
    if (getAccessFromLocalStorage()) {
        return redirect('/');
    }
    return null;
};
