import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

import { IFormLogin } from "../../models/IFormLogin"
import { Controller, useForm } from 'react-hook-form'
import loginSchema from "../../schema/LoginSchema"
import { ShowFormErrorMessage } from '../../component/ShowFormErrorMessage';

const LoginForm = () => {
    const defaultValues: IFormLogin = {
        username: '',
        password: ''
    }

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues
    })

    const onSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name='username'
                control={control}
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <label htmlFor={field.name} className='block text-900  font-medium mb-2'>
                                User Name
                            </label>
                            <InputText
                                {...field}
                                id={field.name}
                                placeholder='Username'
                                className={classNames('w-full p-3 md:w-25rem', {
                                    'p-invalid': fieldState.error
                                })}
                                style={{ padding: '1rem' }}
                            />
                            <ShowFormErrorMessage message={errors[field.name]?.message} />
                        </>
                    )
                }}
            />
            <Controller
                name='password'
                control={control}
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <label htmlFor={field.name} className='block text-900  font-medium mb-2'>
                                Password
                            </label>
                            <Password
                                {...field}
                                inputId={field.name}
                                placeholder='Password'
                                toggleMask
                                className={classNames('w-full', {
                                    'p-invalid': fieldState.error
                                })}
                                inputClassName='w-full p-3 md:w-25rem'
                                feedback={false}
                            />
                            <ShowFormErrorMessage message={errors[field.name]?.message} />
                        </>
                    )
                }}
            />
            <Button className="w-full mt-2 mb-4" label="Login" type='submit' severity="success"></Button>
        </form>
    )
}

export default LoginForm