import classNames from 'classnames/bind';

type propStyleModule = {
    styles: CSSModuleClasses;
};
export const styleModule = ({ styles }: propStyleModule) => {
    return classNames.bind(styles);
};
