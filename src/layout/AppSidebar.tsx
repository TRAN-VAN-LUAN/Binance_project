import { useState } from 'react';
import { IconChervo } from '../assets/Icon/icon';
import { cx } from './Layout';
import { DashBoard } from '../store/storeDashBoard';
import { useTranslation } from 'react-i18next';
import { Button } from '../component/Button/Button';
import { useNavigate } from 'react-router-dom';

const AppSidebar = () => {
    const { t } = useTranslation(['DashBoard']);
    const [titles, setTitle] = useState<string[]>(['']);
    const [stateFocus, setStateFocus] = useState<string>(DashBoard[0].title);
    const navigate = useNavigate();

    const handleShowItem = (path?: string, title?: string) => {
        DashBoard.map((dashBoardItem) => {
            if (!!dashBoardItem.children && dashBoardItem.title === title) {
                if (titles.includes(title)) {
                    setTitle((prev) => prev.filter((item) => item !== title));
                } else {
                    setTitle((prev) => [...prev, title]);
                }
            } else {
                navigate(path ? path : '');
            }

            if (title) {
                setStateFocus(title);
            }
        });
    };
    return (
        <div className={cx('sidebar-main-container')}>
            <ul className={cx('sidebar-list')}>
                {DashBoard.map((dashBoardItem, index) => (
                    <>
                        <Button
                            key={index}
                            leftIcon={dashBoardItem.icon}
                            twoIcon
                            className={cx(stateFocus === dashBoardItem.title ? 'focus-item' : '', 'btn-dashboard')}
                            rightIcon={dashBoardItem.children ? <IconChervo width="2.0rem" height="2rem" /> : null}
                            onClick={() => handleShowItem(dashBoardItem.path, dashBoardItem.title)}
                        >
                            {t(dashBoardItem.title)}
                        </Button>

                        {titles.includes(dashBoardItem.title) &&
                            dashBoardItem.children?.map((item, index) => (
                                <button
                                    onClick={() => handleShowItem(item.path)}
                                    key={index}
                                    className={cx('sidebar-btn', 'sidebar-childre-item')}
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
