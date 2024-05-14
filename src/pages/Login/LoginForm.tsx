// import lib
// import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Import file
import { RootState } from '../../store';
import { Button } from '../../component/Button/Button';
import Input from '../../component/Input/Input';
import { IFormLogin } from '../../models/ILogin';
// import loginSchema from '../../schema/LoginSchema';
import { ShowFormErrorMessage } from '../../component/Input/ShowFormErrorMessage';
import { cx } from './login';
import { IUser } from '../../models/IUser';
import { AuthData } from '../../layout/context/layoutContext';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

const LoginForm = () => {
    const { t } = useTranslation(['Login']);
    let listUser = useSelector((state: RootState) => state.user.listUser);
    const { setAuthenticated } = AuthData();
    const navigate = useNavigate();

    const defaultValues: IFormLogin = {
        username: '',
        password: '',
    };

    const {
        control,
        // watch,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        // resolver: yupResolver(loginSchema),
        defaultValues,
    });

    const refEmail = useRef<HTMLInputElement>(null);
    const refPassword = useRef<HTMLInputElement>(null);

    // const valueEmail = watch('username');
    // const valuePassword = watch('password');

    const onSubmit = () => {
        const resultFindUser: IUser[] = listUser.filter(
            (user) => user.email === refEmail.current?.value && user.password === refPassword.current?.value,
        );
        if (setAuthenticated) {
            setAuthenticated();
            // save to localstorage
            if (resultFindUser.length > 0) {
                const infoUser = JSON.stringify(resultFindUser[0]);
                localStorage.setItem('access_token', infoUser);
                navigate('/');
            } else {
                setError('username', { type: 'custom', message: 'Invalid user name' });
                setError('password', { type: 'custom', message: 'Invalid password' });
            }
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
                                // {...field}
                                id={field.name}
                                placeholder="Username"
                                type="text"
                                className={cx('username')}
                                ref={refEmail}
                                // onChange={() => handleChangeEmail()}
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
                                ref={refPassword}
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
