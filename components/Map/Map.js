import styles from '@/components/Map/Map.module.css';

export default function Map() {

  return (
    <section className={styles.container}>
      <img
        src="/images/Map/Map.png"
        alt="Map Background"
        className={styles.mapImage}
      />

      <div className={styles.overlay}>
        <h2>Контакты</h2>
        <p>Оптовый поставщик «Султан»</p>

        <div className={styles.contactInfo}>
          <div className={styles.iconText}>
            <img src="/images/Map/gps.svg" alt="Icon" className={styles.icon} />
            <div>
              <h3>Адрес:</h3>
              <p>
                г. Кокшетау, ул. Ж. Ташенова 129Б
                <br />
                (Рынок Восточный)
              </p>
            </div>
            <div className={styles.sale}>
              <h3>Отдел продаж:</h3>
              <p>
                +7 (777) 490-00-91
                <br />
                opt.sultan@mail.ru
              </p>
            </div>
          </div>
        </div>

        <div className={styles.iconText}>
          <img src="/images/Map/file.svg" alt="Icon" className={styles.icon} />
          <div>
            <h3>Данные налогоплательщика:</h3>
            <p>
              ИП Катран Д.С.
              <br />
              ИНН: 860113450858
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
