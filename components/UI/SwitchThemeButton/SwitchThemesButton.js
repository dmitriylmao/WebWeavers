import styles from '@/components/UI/SwitchThemeButton/SwitchThemesButton.module.css';

const SwitchThemesButton = ({ handleChange, isChecked }) => {
  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        id="check"
        className={styles.toggle}
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"> {isChecked ? 'dark' : 'light'} mode </label>
    </div>
  );
};

export default SwitchThemesButton;
