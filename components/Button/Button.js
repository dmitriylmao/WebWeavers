import Link from 'next/link';
import styles from './Button.module.css';

const Button = ({ text, href, imgSrc, customClass }) => {
  return (
    <Link href={href} className={`${styles.button} ${customClass || ''}`}>
      {text}
      {imgSrc && (
        <img src={imgSrc} alt="button icon" className={styles.buttonImage} />
      )}
    </Link>
  );
};

export default Button;
