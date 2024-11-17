import styles from './EmailInput.module.css';

export default function EmailInput() {
  return (
    <div className={styles.container}>
      <input
        type="email"
        placeholder="Введите ваш E-mail"
        className={styles.input}
      />
      <button className={styles.button}>
        <span>&#9654;</span>
      </button>
    </div>
  );
}
