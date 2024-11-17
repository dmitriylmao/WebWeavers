import searchIconSrc from '@/public/images/Header/search_Icon.svg';
import Image from 'next/image';
import styles from '@/components/Header1/SearchInput.module.css';

export default function SearchInput() {
  return (
    <div className={styles.container}>
      <input type="email" placeholder="Поиск..." className={styles.input} />
      <button className={styles.button}>
        <span>
          <Image
            src={searchIconSrc}
            alt="Location Icon"
            width={20}
            height={20}
            className={styles.icon}
          />
        </span>
      </button>
    </div>
  );
}
