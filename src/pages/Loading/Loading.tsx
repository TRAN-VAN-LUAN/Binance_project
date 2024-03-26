import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

const Loading = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('loader')}></div>;
        </div>
    );
};

export default Loading;
