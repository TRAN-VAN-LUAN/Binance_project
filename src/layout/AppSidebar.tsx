import { useState } from 'react';
import { IconChervo } from '../assets/Icon/icon';
import { cx } from './Layout';
import { DashBoard } from './store/storeLayout';
import { useTranslation } from 'react-i18next';
const AppSidebar = () => {
    const { t } = useTranslation(['DashBoard']);
    const [titles, setTitle] = useState<string[]>(['']);

    const handleShowItem = (title: string) => {
        DashBoard.map((dashBoardItem) => {
            if (!!dashBoardItem.children && dashBoardItem.title === title) {
                if(titles.includes(title)){
                    setTitle(prev => prev.filter(item => item !== title));
                }else {
                    setTitle((prev) => [...prev, title]);
                }

            }
        });
    };
    return (
        <div className={cx('sidebar-main-container')}>
            <ul className={cx('sidebar-list')}>
                {DashBoard.map((dashBoardItem, index) => (
                    <>
                        <button
                            onClick={() => handleShowItem(dashBoardItem.title)}
                            key={index}
                            className={cx('sidebar-btn')}
                        >
                            <div>
                                <span className={cx('sidebar-icon')}>{<dashBoardItem.icon />}</span>
                                <span className={cx('title')}>{t(dashBoardItem.title)}</span>
                            </div>
                            {dashBoardItem.children && (
                                <span className={cx('icon-chervo')}>{<IconChervo width="2.0rem" height="2rem" />}</span>
                            )}
                        </button>
                        {titles.includes(dashBoardItem.title)&&
                            dashBoardItem.children?.map((item, index) => (
                                <button key={index} className={cx('sidebar-btn', 'sidebar-childre-item')}>
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
