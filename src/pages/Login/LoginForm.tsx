// import lib
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Import file
import { Button } from '../../component/Button/Button';
import Input from '../../component/Input/Input';
import { IFormLogin } from '../../models/ILogin';
import loginSchema from '../../schema/LoginSchema';
import { ShowFormErrorMessage } from '../../component/Input/ShowFormErrorMessage';
import { cx } from './Login';
import { IUser, defaultUser } from '../../models/ILogin';
import { getAllUserById } from '../../services/userApi';
import { AuthData } from '../../layout/context/layoutContext';

const LoginForm = () => {
    const { t } = useTranslation(['Login']);
    const [users, setUsers] = useState<IUser[]>(defaultUser);
    const { setAuthenticated } = AuthData();
    const navigate = useNavigate();

    const defaultValues: IFormLogin = {
        username: '',
        password: '',
    };

    const {
        control,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues,
    });

    const valueEmail = watch('username');
    const valuePassword = watch('password');

    const loadAllUser = async () => {
        const dataUser: IUser[] = await getAllUserById();
        setUsers(dataUser);
    };

    useEffect(() => {
        loadAllUser();
    }, []);

    const onSubmit = () => {
        const resultFindUser: IUser[] = users.filter(
            (user) => user.email === valueEmail && user.password === valuePassword,
        );
        if (setAuthenticated) {
            setAuthenticated();
            // save to localstorage
            const infoUser = JSON.stringify(resultFindUser[0]);
            localStorage.setItem('access_token', infoUser);
            navigate('/');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cx('form-login')}>
            <Controller
                name="username"
                control={control}
                render={({ field }) => {
                    return (
                        <>
                            <label htmlFor={field.name} className={cx('login-lable')}>
                                {t('username')}
                            </label>
                            <Input
                                {...field}
                                id={field.name}
                                placeholder="Username"
                                type="text"
                                className={cx('username')}
                            />
                            <ShowFormErrorMessage message={errors[field.name]?.message} />
                        </>
                    );
                }}
            />
            <Controller
                name="password"
                control={control}
                render={({ field }) => {
                    return (
                        <>
                            <label htmlFor={field.name} className={cx('login-lable')}>
                                Password
                            </label>
                            <Input
                                {...field}
                                id={field.name}
                                placeholder="Password"
                                className={cx('password')}
                                type="password"
                            />
                            <ShowFormErrorMessage message={errors[field.name]?.message} />
                        </>
                    );
                }}
            />
            <Button primary type="submit">
                {t('login')}
            </Button>
        </form>
    );
};

export default LoginForm;
