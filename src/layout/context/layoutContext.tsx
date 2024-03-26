import { createContext, useState, useContext, useEffect } from 'react';
import { ILayoutProvider, defaultLayout } from '../../models/ILayout';
import { childComponentProps } from '../../types/typesLayout';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { IUser } from '../../models/IUser';
import { fetchAllUser } from '../../services/userApi';

const AuthContext = createContext<ILayoutProvider>(defaultLayout);
export const AuthData = () => useContext(AuthContext);

export const LayoutProvider = ({ children }: childComponentProps) => {
    const [auth, setAuth] = useState<boolean>(defaultLayout.isAuthenticated);
    const [navDraw, setNavDraw] = useState<boolean>(false);
    let listUser = useSelector((state: RootState) => state.user.listUser);
    const dispatch = useAppDispatch();
    const [users, setUsers] = useState<IUser[]>(listUser);

    const valueLayoutProvider: ILayoutProvider = {
        showNavDraw: navDraw,
        setShowNavDraw: () => {
            setNavDraw(!navDraw);
        },
        isAuthenticated: auth,
        setAuthenticated: () => {
            setAuth(!auth);
        },
    };

    useEffect(() => {
        dispatch(fetchAllUser());
        setUsers(listUser);
    }, [users]);

    return <AuthContext.Provider value={valueLayoutProvider}>{children}</AuthContext.Provider>;
};
