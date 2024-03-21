import classNames from 'classnames/bind';
import styles from './DashBoardItem.module.scss';
import { FC, useState } from 'react';
import { Button } from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { IClock, IconPrice } from '../../assets/Icon/icon';
const cx = classNames.bind(styles);

interface IDashBoardVoucher {
    id?: number;
    name: string;
    subTitle?: string;
    price?: string;
    state?: boolean;
    setStateActive: (nameActive: string) => void;
    active: {
        subTitle1?: string;
        subTextPrimary?: string;
        subTitle2?: string;
        time: string;
        state: string;
    };
}

const DashBoardVoucher: FC<IDashBoardVoucher> = (props) => {
    const { id, name, subTitle, price, state, setStateActive } = props;
    const [day, setDay] = useState<number>(0);
    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);
    const { t } = useTranslation(['DashBoard']);

    const dbDisabled: boolean = props.active?.state === 'pending' ? true : false;
    const date = new Date(props.active.time).getTime();

    const countDown = setInterval(() => {
        let now = new Date().getTime();
        let distance = date - now;
        setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinute(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        if (distance < 0) {
            clearInterval(countDown);
        }
    }, 1000);

    return (
        <div className={cx('voucher', state ? 'active' : '')}  onClick={() => setStateActive(name)}>
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
                                <span className={cx('text-hidden')}></span>
                            </span>

                            <div className={cx('voucher-time')}>
                                <li>
                                    {day}
                                    <span>Days</span>
                                </li>
                                <li>
                                    {hour}
                                    <span>Hours</span>
                                </li>
                                <li>
                                    {minute}
                                    <span>Minutes</span>
                                </li>
                            </div>

                            <div className={cx('btn-s')}>
                                <Button disabled={dbDisabled} small primary>
                                    {t(name)}
                                </Button>
                            </div>
                        </div>
                        <div className={cx('content-gif')}>
                            <div className={cx('voucher-gif')}></div>
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
                            <span>
                                <IconPrice />
                                {price}
                            </span>
                        </div>

                        {dbDisabled ? (
                            <div className={cx('voucher-state')}>
                                <IClock />
                                <span> {t(props.active.state)}</span>
                            </div>
                        ) : (
                            <div className={cx('btn-s')}>
                                <Button disabled={dbDisabled} small primary>
                                    {t(name)}
                                </Button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default DashBoardVoucher;
