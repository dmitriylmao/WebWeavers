import searchIconSrc from '@/public/images/Header/search_Icon.svg';
import Image from 'next/image';
import styles from '@/components/Header/SearchInput.module.css';
import ContextTheme from '@/core/hooks/ContextTheme';
import { useContext } from 'react';

export default function SearchInput() {
  const value = useContext(ContextTheme);

  return (
    <div className={styles.container} id={value.isDark ? "dark" : "light"}>
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
