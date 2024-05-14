import classNames from 'classnames/bind';
import styles from './BreadCrumb.module.scss';
import { IconArrowRight } from '../../assets/Icon/icon';
import { useTranslation } from 'react-i18next';
import { AuthData } from '../context/layoutContext';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

export interface IItemBreadCrumb {
    label: string;
    url: string;
}

interface IBreadCrumbProps {
    item: IItemBreadCrumb[];
    home: IItemBreadCrumb;
    coin?: string;
}

const BreadCrumb = (props: IBreadCrumbProps) => {
    const { item, home, coin } = props;
    const { t } = useTranslation(['BreadCrumb']);
    const { theme } = AuthData();
    const navigate = useNavigate();

    const handleNavigate = (url: string) => {
        navigate(url);
    };

    return (
        <div className={cx('main-container', theme)}>
            <div onClick={() => handleNavigate(home.url)} className={cx('home')}>
                {t(home.label)}
            </div>
            <IconArrowRight></IconArrowRight>
            {item?.map((breadItem, index) => (
                <>
                    <div onClick={() => handleNavigate(breadItem.url)} key={index} className={cx('item')}>
                        {t(breadItem.label)}
                    </div>
                    <IconArrowRight></IconArrowRight>
                </>
            ))}
            <div className={cx('coin')}>{coin}</div>
        </div>
    );
};

export default BreadCrumb;
