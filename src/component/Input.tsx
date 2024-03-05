import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { InputNumber } from 'primereact/inputnumber'
import { ReactElement, forwardRef } from 'react';
import { inputTypes } from '../enums/InputType';


interface IInputProps {
    id?: string
    className?: string
    placeholder?: string,
    type?: string,
    label?: string
    onChange?: any,
    onBlur?: any,
    required?: boolean
    disabled?: boolean
    errorMessage?: ReactElement

}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    const { id, className, placeholder, type, label, errorMessage } = props
    const { TEXT, NUMBER, PASSWORD } = inputTypes
    const renderInput = () => {
        switch (type) {
            case TEXT:
                return (
                    <InputText
                        id={id}
                        className={className}
                        placeholder={placeholder}
                        ref={ref}
                        type={type}
                        onChange={(e) => props.onChange(e.target.value)}
                    >
                    </InputText>
                )
                break
            case NUMBER:
                return (
                    <InputNumber
                        inputId={id}
                        inputClassName={className}
                        placeholder={placeholder}
                        inputRef={ref}
                        type={type}
                        onChange={(e) => props.onChange(e)}
                    >
                    </InputNumber>
                )
            case PASSWORD:
                return (
                    <Password
                        inputId={id}
                        inputClassName={className}
                        placeholder={placeholder}
                        inputRef={ref}
                        type={type}
                        onChange={(e) => props.onChange(e.target.value)}
                    >
                    </Password>
                )
            default:
                return (
                    <InputText
                        id={id}
                        className={className}
                        placeholder={placeholder}
                        ref={ref}
                        type={type}
                        onChange={(e) => props.onChange(e.target.value)}
                    >
                    </InputText>
                )


        }
    }
    return (
        <div className='flex flex-column w-full'>
            <div className='flex flex-column grap-2'>
                {<label htmlFor={id} className='font-bold block'>
                    {label} {props.required && <span className='text-red-500'>*</span>}
                </label>}
                {renderInput()}
            </div>
            {errorMessage && errorMessage}
        </div>

    )
})

export default Input