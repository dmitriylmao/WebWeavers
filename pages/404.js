import styles from '@/pages/404.module.css';

const Custom404 = () => {
  const videos = ['/videos/gosling1_mobile.mp4', '/videos/gosling2_mobile.mp4'];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        src={randomVideo}
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
