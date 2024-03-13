import classNames from 'classnames/bind';
import styles from './DashBoard.module.scss';
import AppSidebar from '../../layout/AppSidebar';
import { IconPen, IconToolTips, IconToolTipsWarp } from '../../assets/Icon/icon';
import { dashBoardItemHeader } from '../../store/storeDashBoard';
import ItemDetails from '../../component/DashBoardItem/ItemDetails';

const cx = classNames.bind(styles);

const DashBoard = () => {
    return (
        <div className={cx('main-container')}>
            <AppSidebar />
            <div className={cx('container')}>
                <div className={cx('dashboard-header')}>
                    <div className={cx('info')}>
                        <span className={cx('avata')}>
                            <div className={cx('img-avata')}></div>
                            <IconPen className={cx('icon-pen')} />
                        </span>
                        <div className={cx('info-item')}>
                            <div className={cx('username')}>Anonymous-User-bc84d</div>
                            <div className={cx('info-action')}>
                                <IconToolTips />
                                <IconToolTipsWarp />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info-details')}>
                        {dashBoardItemHeader.map((itemHeader, index) => (
                            <ItemDetails
                                key={index}
                                title={itemHeader.title}
                                item={itemHeader.item}
                                icon={itemHeader?.icon}
                            ></ItemDetails>
                        ))}
                    </div>
                </div>
                <div className={cx('dashboard-container')}></div>
            </div>
        </div>
    );
};

export default DashBoard;
