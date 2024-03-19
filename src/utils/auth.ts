import { IUser, defaultUser } from '../models/IUser';

export const getAccessFromLocalStorage = () => localStorage.getItem('access_token') || false;

export const setTokenToLocalStorage = (access_token: string) => {
    access_token ? localStorage.setItem('access_token', access_token) : null;
};

export const getUserFromLocalStorage = (): IUser => {
    let storage;
    try {
        const LocalStorage = localStorage.getItem('access_token');
        if (LocalStorage) {
            storage = JSON.parse(LocalStorage);
        } else {
            storage = defaultUser;
        }
    } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        storage = defaultUser;
    }

    return storage;
};
