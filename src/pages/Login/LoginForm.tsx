import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../component/Button/Button';
import { Password } from 'primereact/password';

import { IFormLogin } from '../../models/IFormLogin';
import { Controller, useForm } from 'react-hook-form';
import loginSchema from '../../schema/LoginSchema';
import { ShowFormErrorMessage } from '../../component/ShowFormErrorMessage';
import style from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const LoginForm = () => {
    const defaultValues: IFormLogin = {
        username: '',
        password: '',
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues,
    });

    const onSubmit = () => {};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="username"
                control={control}
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <label htmlFor={field.name} className="block text-900  font-medium mb-2">
                                User Name
                            </label>
                            <input
                                {...field}
                                id={field.name}
                                placeholder="Username"
                                className={cx('w-full p-3 md:w-25rem')}
                                style={{ padding: '1rem' }}
                            />
                            <ShowFormErrorMessage message={errors[field.name]?.message} />
                        </>
                    );
                }}
            />
            <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <label htmlFor={field.name} className="lable">
                                Password
                            </label>
                            <Password
                                {...field}
                                inputId={field.name}
                                placeholder="Password"
                                toggleMask
                                className={cx('password')}
                                inputClassName="password-text"
                                feedback={false}
                            />
                            <ShowFormErrorMessage message={errors[field.name]?.message} />
                        </>
                    );
                }}
            />
            <Button primary type="submit">
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
