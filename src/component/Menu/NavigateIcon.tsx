import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { childComponentProps } from '../../types/typesLayout';
const cx = classNames.bind(styles);

const NavigateIcon = ({ children }: childComponentProps) => {
    return <div className={cx('header-icon')}>{children}</div>;
};

export default NavigateIcon;
