export interface IFormLogin {
    username?: string;
    password?: string;
}

export interface IUser {
    id?: number;
    first_name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    gender?: string;
}

export const defaultUser: IUser[] = [
    {
        id: 0,
        first_name: '',
        last_name: '',
        password: '',
        email: '',
        gender: '',
    },
];
