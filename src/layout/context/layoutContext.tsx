import { createContext, useState, useContext, useEffect } from 'react';
import { ILayoutProvider, defaultLayout } from '../../models/ILayout';
import { childComponentProps } from '../../types/typesLayout';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { IUser } from '../../models/IUser';
import { fetchAllUser } from '../../services/userApi';
import { DashBoard } from '../../store/storeDashBoard';
import { ICoin } from '../../store/storeMarketPanel';

type Theme = 'light' | 'dark';
const AuthContext = createContext<ILayoutProvider>(defaultLayout);
export const AuthData = () => useContext(AuthContext);

export const LayoutProvider = ({ children }: childComponentProps) => {
    const [auth, setAuth] = useState<boolean>(defaultLayout.isAuthenticated);
    const [navDraw, setNavDraw] = useState<boolean>(false);
    const [focusDashBoard, setFocusDashBoard] = useState<string>(DashBoard[0].title);
    const [coinItem, setCoinItem] = useState<ICoin>({});
    let listUser = useSelector((state: RootState) => state.user.listUser);

    const [theme, setTheme] = useState<Theme>('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

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
        setToggleThem: () => toggleTheme(),
        theme: theme,
        focusDashBoard: focusDashBoard,
        setFocusDashBoard: (data: string) => {
            setFocusDashBoard(data);
        },
        coinItem: coinItem,
        setCoinItem: (coin: ICoin) => {
            setCoinItem(coin);
        },
    };

    useEffect(() => {
        dispatch(fetchAllUser());
        setUsers(listUser);
    }, [users]);

    return <AuthContext.Provider value={valueLayoutProvider}>{children}</AuthContext.Provider>;
};
