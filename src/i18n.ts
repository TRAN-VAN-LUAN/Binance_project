import i18nEN from './i18n/en';
import i18nVN from './i18n/vn';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    vn: i18nVN,
    en: i18nEN,
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('language') ?? 'vn',

    interpolation: {
        escapeValue: false, // not needed for react!!
    },
});

export default i18n;
