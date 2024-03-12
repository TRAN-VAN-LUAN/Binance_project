import { FC } from 'react';
import styles from '../Menu.module.scss';
import classNames from 'classnames/bind';
import { IDropDown } from '../../../models/ILayout';
import { ArrowRight } from '../../../assets/Icon/icon';

const cx = classNames.bind(styles);
const DropDownItem: FC<IDropDown> = (props) => {
    const { icon, title, body, className } = props;
    return (
        <div className={cx('dropdown-item', { [className as string]: className })}>
            <span>{icon}</span>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    {title}
                    <span className={cx('arrow-icon')}>
                        <ArrowRight className={cx('icon-dropdown')} width="1.6rem" height="1.6rem" />
                    </span>
                </div>
                <span className={cx('infomation')}>{body}</span>
            </div>
        </div>
    );
};

export default DropDownItem;
