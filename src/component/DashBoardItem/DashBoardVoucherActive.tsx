import classNames from 'classnames/bind';
import styles from './DashBoardItem.module.scss';
import { FC } from 'react';
import { Button } from '../Button/Button';
const cx = classNames.bind(styles);

interface IDashBoardVoucher {
    id?: number;
    name?: string;
    subTitle?: string;
    price?: string;
    state?: boolean;
    active?: {
        subTitle1?: string;
        subTextPrimary?: string;
        subTitle2?: string;
        time?: string;
        state?: string;
    };
}

const DashBoardVoucher: FC<IDashBoardVoucher> = (props) => {
    const { id, name, subTitle, price, state } = props;
    // function getCountdown(){

    //     // find the amount of "seconds" between now and target
    //     var current_date = new Date().getTime();
    //     var
    //     // var seconds_left = (target_date - current_date) / 1000;

    //     // days = pad( parseInt(seconds_left / 86400) );
    //     // seconds_left = seconds_left % 86400;

    //     // hours = pad( parseInt(seconds_left / 3600) );
    //     // seconds_left = seconds_left % 3600;

    //     // minutes = pad( parseInt(seconds_left / 60) );
    //     // seconds = pad( parseInt( seconds_left % 60 ) );
    // }

    // const countDown = () => {
    //     if()
    // }

    console.log(new Date().getTime());

    return (
        <div className={cx('voucher')}>
            {state ? (
                <>
                    <div className={cx('voucher-id', 'voucher-id-active')}>
                        <span>{id}</span>
                        <div className={cx('line')}></div>
                    </div>
                    <div className={cx('voucher-active', 'voucher-item')}>
                        <div className={cx('content-text')}>
                            <span className={cx('title')}>
                                {props.active?.subTitle1}
                                <span className={cx('text-primary')}>{props.active?.subTextPrimary}</span>
                                {props.active?.subTitle2}
                            </span>

                            <Button primary>{name}</Button>
                        </div>
                        <div className={cx('content-gif')}>
                            <img src="https://bin.bnbstatic.com/static/images/mainuc/dashboard/408x408_purple.gif" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={cx('voucher-id')}>
                        <span>{id}</span>
                        <div className={cx('line')}></div>
                    </div>
                    <div className={cx('voucher-inactive', 'voucher-item')}>
                        <div className={cx('voucher-inactive-item')}>
                            <span>{subTitle}</span>
                            <span>{price}</span>
                        </div>
                        <Button>{props.active?.state}</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default DashBoardVoucher;
