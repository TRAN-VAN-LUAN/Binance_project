import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { getCurrentUser } from '../../services/userApi';
import { getCoinApi } from '../../services/coinApI';

const UserProvider: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCurrentUser());
        // dispatch(getCoinApi());
    }, []);

    useEffect(() => {
        const callCoinApi = setInterval(() => {
            dispatch(getCoinApi());
        }, 10000);
        return () => clearInterval(callCoinApi);
    }, []);
    return null;
};

export default UserProvider;
