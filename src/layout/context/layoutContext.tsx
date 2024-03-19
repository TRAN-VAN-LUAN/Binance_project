import { createContext, useState, useContext } from 'react';
import { ILayoutProvider, defaultLayout } from '../../models/ILayout';
import { childComponentProps } from '../../types/typesLayout';

const AuthContext = createContext<ILayoutProvider>(defaultLayout);
export const AuthData = () => useContext(AuthContext);

export const LayoutProvider = ({ children }: childComponentProps) => {
    const [auth, setAuth] = useState<boolean>(defaultLayout.isAuthenticated);
    const [navDraw, setNavDraw] = useState<boolean>(false);

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

    return <AuthContext.Provider value={valueLayoutProvider}>{children}</AuthContext.Provider>;
};
