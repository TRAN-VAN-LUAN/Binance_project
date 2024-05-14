import classNames from 'classnames/bind';
import styles from './QR.module.scss';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

interface IQR {
    className?: string;
    QRImage?: ReactNode;
    show?: boolean;
}

const QR = (props: IQR) => {
    const { t } = useTranslation(['Overview']);
    const { className, QRImage, show = false } = props;
    return (
        <>
            <div className={cx('qr', className)}>
                <div className={cx('wrapper-qr')}>
                    {QRImage}
                    <div className={cx('icon-qr')}></div>
                </div>
            </div>
            {show ? (
                <div className={cx('info-qr')}>
                    <div className={cx('info-qr-header')}>{t('Scan to Download the App')}</div>
                    <div>{t('iOS and Android')}</div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default React.memo(QR);
