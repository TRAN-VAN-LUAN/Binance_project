import classNames from 'classnames/bind';
import styles from '../DropDown.module.scss';
import QR from '../../../OverViewItem/QR';
import { ImageQR } from '../../../../assets/Icon/icon';

const cx = classNames.bind(styles);

const DropDownDownLoad = () => {
    return (
        <div className={cx('download', 'dropdown-user')}>
            <QR className={cx('wrapper-download')} QRImage={<ImageQR width="13.6rem" height="13.6rem" />}></QR>
        </div>
    );
};

export default DropDownDownLoad;
