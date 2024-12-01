import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import style from './Description.module.css';
import { useTranslation } from 'next-i18next';

const Description = ({ text }) => {
    const { t } = useTranslation('common');
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);
    const contentRef = useRef(null);
    const toggleDescription = () => setIsOpen(!isOpen);
    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);
    return (
        <div className={style.description}>
            <h2 onClick={toggleDescription} className={style.descriptionTitle}>
                {t('Description')}
                <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isOpen ? 240 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {isOpen ? '▴' : '▾'}
                </motion.span>
            </h2>
            <motion.div
                className={style.descriptionContainer}
                style={{ maxHeight }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                <p ref={contentRef} className={style.descriptionText}>
                    {text}
                </p>
            </motion.div>
        </div>
    );
};

export default Description;
