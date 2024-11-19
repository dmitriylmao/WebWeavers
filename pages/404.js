import styles from '@/pages/404.module.css';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        src="/videos/gosling.mp4"
        autoPlay
        loop
        playsInline
      >
        <track kind="captions" srcLang="en" label="No captions available" />
      </video>
    </div>
  );
};

Custom404.useLayout = false;

export default Custom404;
