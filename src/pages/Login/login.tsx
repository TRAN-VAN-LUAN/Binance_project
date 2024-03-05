import LoginForm from "./LoginForm"
import { Button } from "primereact/button"

const Login = () => {
    return (
        <div className="flex flex-column align-items-center justify-content-center w-full h-screen">
            <h3 className="font-bold text-3xl flex ">Log In</h3>
            <LoginForm />
            <div className='flex flex-column justify-content-center ign-items-center' >
                <Button className='w-full md:w-25rem' aria-label='Google' outlined icon='pi pi-google' label='Login with Google' />
            </div>
        </div>
    )
}

export default Login