import LoginForm from './LoginForm';
import { Button } from 'primereact/button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Login = () => {
    return (
        <div className={cx('container')}>
            <h3 className={cx('header')}>Log In</h3>
            <LoginForm />
            <div className={cx('block-button')}>
                <Button
                    className="btn btn-login"
                    aria-label="Google"
                    outlined
                    icon="pi pi-google"
                    label="Login with Google"
                />
            </div>
        </div>
    );
};

export default Login;
