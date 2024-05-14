import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { childComponentProps } from '../../types/typesLayout';
const cx = classNames.bind(styles);

const NavigateIcon = ({ children, className, onClick }: childComponentProps) => {
    return (
        <div onClick={onClick} className={cx('header-icon', className)}>
            {children}
        </div>
    );
};

export default NavigateIcon;
