import { IUser } from '../models/ILogin';
import { request } from '../setup/axios/intances';

export const getAllUserById = () => {
    return new Promise<IUser[]>((resolver, reject) => {
        request
            .get('user')
            .then((res) => {
                console.log(res.data);
                resolver(res.data);
            })
            .catch((error) => {
                console.error('Error:', error);
                reject(error);
            });
    });
};
