import classNames from 'classnames/bind';
import styles from '../Menu.module.scss';
import DropDownItem from './DropDownItem';
import { IDropDown } from '../../../models/ILayout';
import { FC } from 'react';

const cx = classNames.bind(styles);

export interface IDropDownProps {
    headerLeft?: string;
    headerRight?: string;
    contentFirst?: IDropDown[];
    contentSec?: IDropDown[];
    className?: string;
}

const DropDown: FC<IDropDownProps> = (props) => {
    const { headerLeft, headerRight, contentFirst, contentSec, className } = props;
    return (
        <div className={cx('main-container', { [className as string]: className })}>
            <div className={cx('main-container-primary')}>
                <div className={cx('header')}>{headerLeft}</div>
                <div className={cx('container')}>
                    {contentFirst &&
                        contentFirst.map((itemDropDown, index) => (
                            <DropDownItem
                                icon={itemDropDown.icon}
                                title={itemDropDown.title}
                                body={itemDropDown.body}
                                key={index}
                            ></DropDownItem>
                        ))}
                </div>
            </div>
            <div className={cx('main-container-other')}>
                <div className={cx('header')}>{headerRight}</div>
                <div className={cx('container')}>
                    {contentSec &&
                        contentSec.map((itemDropDown, index) => (
                            <DropDownItem
                                icon={itemDropDown.icon}
                                title={itemDropDown.title}
                                body={itemDropDown.body}
                                key={index}
                            ></DropDownItem>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default DropDown;
