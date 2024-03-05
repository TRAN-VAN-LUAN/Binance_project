export const ShowFormErrorMessage = ({ message }: IFormMessage) => {
    return (<p className="m-1">{message ? <small className='p-error'>{message}</small> : null}</p>)
}

interface IFormMessage {
    message?: any
}