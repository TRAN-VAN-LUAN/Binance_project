import LoginForm from './LoginForm';
import { Button } from '../../component/Button/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';

export const cx = classNames.bind(styles);

const Login = () => {
    const { t } = useTranslation(['Login']);
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <h2 className={cx('header')}>{t('login')}</h2>
                <LoginForm />
                <div className={cx('block-button')}>
                    <Button active leftIcon={<FontAwesomeIcon icon={faGoogle} />} className={cx('btn-login')}>
                        Login with Google
                    </Button>
                </div>
            </div>
            <div className={cx('QR')}>QR</div>
        </div>
    );
};

export default Login;
