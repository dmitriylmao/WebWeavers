import { Raleway } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/pages/404.module.css';
import gif from '@/public/images/404/Gosling_na_snegu.gif';

const raleway = Raleway({
  weight: ['900'],
  subsets: ['latin'],
  display: 'swap',
});

const Custom404 = () => {
  return (
    <div className={`${styles.container} ${raleway.className}`}>
      <Image src={gif} alt="Funny gif" layout="fill" className={styles.gif} />
      <div className={styles.marqueeWrapper}>
        <motion.div
          className={styles.marquee}
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
          }}
        >
          <span className={styles.marqueeText}>
            &nbsp;&nbsp;PAGE NOT FOUND&nbsp;&nbsp; / PAGE NOT FOUND&nbsp;&nbsp;
            / PAGE NOT FOUND&nbsp;&nbsp; /
          </span>
          <span className={styles.marqueeText}>
            &nbsp;&nbsp;PAGE NOT FOUND&nbsp;&nbsp; / PAGE NOT FOUND&nbsp;&nbsp;
            / PAGE NOT FOUND&nbsp;&nbsp; /
          </span>
          <span className={styles.marqueeText}>
            &nbsp;&nbsp;PAGE NOT FOUND&nbsp;&nbsp; / PAGE NOT FOUND&nbsp;&nbsp;
            / PAGE NOT FOUND&nbsp;&nbsp; /
          </span>
          <span className={styles.marqueeText}>
            &nbsp;&nbsp;PAGE NOT FOUND&nbsp;&nbsp; / PAGE NOT FOUND&nbsp;&nbsp;
            / PAGE NOT FOUND&nbsp;&nbsp; /
          </span>
        </motion.div>
      </div>
    </div>
  );
};

Custom404.useLayout = false;

export default Custom404;
