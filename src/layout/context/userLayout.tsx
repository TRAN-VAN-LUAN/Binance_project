import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { getCurrentUser } from '../../services/userApi';

const UserProvider: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCurrentUser());
    }, []);
    return null;
};

export default UserProvider;
