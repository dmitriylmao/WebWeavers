//Оставлю это тут для примера работы с i18n
import { useTranslation } from 'next-i18next';

const Translate = () => {
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('WebWeavers')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
};

export default Translate;
