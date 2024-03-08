import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../component/Button/Button';
import Input from '../../component/Input/Input';
import { IFormLogin } from '../../models/IFormLogin';
import { Controller, useForm } from 'react-hook-form';
import loginSchema from '../../schema/LoginSchema';
import { ShowFormErrorMessage } from '../../component/Input/ShowFormErrorMessage';
import { cx } from './Login';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
    const { t } = useTranslation(['Login']);

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
        <form onSubmit={handleSubmit(onSubmit)} className={cx('form-login')}>
            <Controller
                name="username"
                control={control}
                render={({ field, fieldState }) => {
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
                render={({ field, fieldState }) => {
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
