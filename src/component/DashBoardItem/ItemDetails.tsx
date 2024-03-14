import { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './DashBoardItem.module.scss';

const cx = classNames.bind(styles);

interface IItemDetails {
    title?: string;
    item?: string;
    icon?: ReactNode;
}

const ItemDetails: FC<IItemDetails> = (props) => {
    const { title, item, icon } = props;
    return (
        <div className={cx('item-details')}>
            <span className={cx('title')}>{title}</span>
            <div className={cx('item-info')}>
                <span className={cx('item-list')}>{item}</span>
                <span className={cx('item-icon')}>{icon}</span>
            </div>
        </div>
    );
};

export default ItemDetails;
