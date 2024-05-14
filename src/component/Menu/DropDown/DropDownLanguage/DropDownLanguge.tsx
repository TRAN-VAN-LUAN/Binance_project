import classNames from 'classnames/bind';
import styles from '../DropDown.module.scss';
import { IListLanguge } from '../../../../store/storeLayout';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const DropDownLanguge = () => {
    const { i18n } = useTranslation(['Header']);
    const [languge, setLanguge] = useState(() => {
        const languageCode = localStorage.getItem('language') ?? 'vn';
        return IListLanguge.find((language) => language.key === languageCode)?.key;
    });

    const handleChangeLanguge = (langugeKey: string) => {
        setLanguge(langugeKey);
        i18n.changeLanguage(langugeKey);
        localStorage.setItem('language', langugeKey);
    };

    return (
        <div className={cx('dropdown-user', 'languge-container')}>
            {IListLanguge.map((langugeItem, index) => (
                <div
                    onClick={() => handleChangeLanguge(langugeItem.key)}
                    className={cx('languge-item', langugeItem.key === languge ? 'primary' : '')}
                    key={index}
                >
                    {langugeItem.languge}
                </div>
            ))}
        </div>
    );
};

export default DropDownLanguge;
