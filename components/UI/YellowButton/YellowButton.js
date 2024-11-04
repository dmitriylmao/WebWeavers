import Link from 'next/link';
import styles from '@/components/UI/YellowButton/YellowButton.module.scss';

const YellowButton = ({
    label,
    icon = null,
    size = 'md',
    onClick,
    disabled = false,
    href = null,
    download = null,
    action = null,
}) => {
    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        if (action === 'add-to-cart') {
            alert('Товар добавлен в корзину!');
        } else if (onClick) {
            onClick(e);
        }
    };

    if (href) {
        return (
            <Link href={href} className={`${styles.yellowButton} ${styles[`yellowButton--${size}`]}`} onClick={handleClick}>
                <span className={styles.yellowButton__label}>{label}</span>
                {icon && (
                    <span className={styles.yellowButton__icon}>
                        <img src={icon.src} alt={label} />
                    </span>
                )}
            </Link>
        );
    }

    if (download) {
        return (
            <a
                href={download}
                download
                className={`${styles.yellowButton} ${styles[`yellowButton--${size}`]}`}
                onClick={handleClick}
            >
                <span className={styles.yellowButton__label}>{label}</span>
                {icon && (
                    <span className={styles.yellowButton__icon}>
                        <img src={icon.src} alt={label} />
                    </span>
                )}
            </a>
        );
    }

    return (
        <button
            className={`${styles.yellowButton} ${styles[`yellowButton--${size}`]}`}
            onClick={handleClick}
            disabled={disabled}
        >
            <span className={styles.yellowButton__label}>{label}</span>
            {icon && (
                <span className={styles.yellowButton__icon}>
                    <img src={icon.src} alt={label} />
                </span>
            )}
        </button>
    );
};

export default YellowButton;
