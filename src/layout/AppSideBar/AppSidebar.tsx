import { useEffect, useState } from 'react';
import { IconChervo } from '../../assets/Icon/icon';
import { DashBoard } from '../../store/storeDashBoard';
import { useTranslation } from 'react-i18next';
import { Button } from '../../component/Button/Button';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AppSideBar.module.scss';
import { AuthData } from '../context/layoutContext';

const cx = classNames.bind(styles);

const AppSidebar = () => {
    const { t } = useTranslation(['DashBoard']);
    const { focusDashBoard, setFocusDashBoard } = AuthData();
    const [titles, setTitle] = useState<string>(focusDashBoard ? focusDashBoard : '');
    const navigate = useNavigate();
    console.log(focusDashBoard);
    console.log(titles);

    const handleShowItem = (path?: string, title?: string, children?: boolean) => {
        DashBoard.map((dashBoardItem) => {
            if (!!dashBoardItem.children && dashBoardItem.title === title) {
                setTitle(title);
            } else {
                navigate(path ? path : '');
            }

            if (title && !children) {
                if (setFocusDashBoard) {
                    console.log(children);
                    setFocusDashBoard(title);
                }
            }
        });
    };

    const checkShowItem = () => {
        let title: string;
        DashBoard.map((dashBoardItem) => {
            title = dashBoardItem.title;
            dashBoardItem.children &&
                dashBoardItem.children.map((item) => {
                    if (item.title === focusDashBoard) {
                        console.log(focusDashBoard, item.title);

                        setTitle(title);
                    }
                });
        });
    };

    useEffect(() => {
        checkShowItem();
    }, [focusDashBoard]);

    return (
        <div className={cx('sidebar-main-container')}>
            <ul className={cx('sidebar-list')}>
                {DashBoard.map((dashBoardItem, index) => (
                    <>
                        <Button
                            key={index}
                            leftIcon={dashBoardItem.icon}
                            twoIcon
                            className={cx(
                                focusDashBoard == dashBoardItem.title && !dashBoardItem.children ? 'focus-item' : '',
                                'btn-dashboard',
                            )}
                            rightIcon={dashBoardItem.children ? <IconChervo width="2.0rem" height="2rem" /> : null}
                            onClick={() =>
                                handleShowItem(dashBoardItem.path, dashBoardItem.title, !!dashBoardItem.children)
                            }
                        >
                            {t(dashBoardItem.title)}
                        </Button>

                        {titles.includes(dashBoardItem.title) &&
                            dashBoardItem.children?.map((item, index) => (
                                <button
                                    onClick={() => handleShowItem(item.path, item.title)}
                                    key={index}
                                    className={cx(
                                        'sidebar-btn',
                                        'sidebar-childre-item',
                                        focusDashBoard == item.title ? 'focus-item' : '',
                                    )}
                                >
                                    <div>
                                        <span className={cx('sidebar-icon')}></span>
                                        <span className={cx('title')}>{t(item.title)}</span>
                                    </div>
                                </button>
                            ))}
                    </>
                ))}
            </ul>
        </div>
    );
};

export default AppSidebar;
