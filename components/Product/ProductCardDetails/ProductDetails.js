import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/images/Products/telejka.svg';
import YellowButton from '@/components/UI/YellowButton/YellowButton';
import shareLogo from '@/public/images/ProductDetails/share.svg';
import downloadLogo from '@/public/images/ProductDetails/download.svg';
import style from '@/components/Product/ProductCardDetails/ProductDetails.module.css';
import { useTranslation } from 'next-i18next';

const ProductDetails = ({ product }) => {
  const { t } = useTranslation('common');

  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [position, setPosition] = useState({ top: '0%', left: '50%' });

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));
  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);

  const moveText = () => {
    const randomTop = Math.floor(Math.random() * 80) + '%';
    const randomLeft = Math.floor(Math.random() * 80) + '%';
    setPosition({ top: randomTop, left: randomLeft });
  };

  const openGitHub = () => {
    window.open('https://github.com/dmitriylmao/WebWeavers', '_blank');
  };

  return (
    <div className={style.container}>
      <div className={style.productDetails}>
        <motion.div
          key={product.id}
          className={style.imageSection}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 8,
            duration: 0.2,
          }}
        >
          <Image
            src={product.imgSrc}
            alt={product.title}
            layout="responsive"
            width={350}
            height={350}
            className={style.productImage}
          />
        </motion.div>

        <div className={style.infoSection}>
          <p className={style.inStock}>{t('InStock')}</p>
          <h1 className={style.productTitle}>
            <span className={style.productBrand}>{product.brand}</span>{' '}
            {product.title}
          </h1>
          <p className={style.productVolume}>
            <span>
              <Image
                src={product.volumeType}
                alt={t('VolumeType')}
                className={style.volumeType}
                width={16}
                height={16}
              />
            </span>
            {product.volume}
          </p>

          <div className={style.priceContainer}>
            <p className={style.productPrice}>{product.price} ₸</p>
            <div className={style.quantityContainer}>
              <button
                className={style.quantityButton}
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className={style.quantity}>{quantity}</span>
              <button
                className={style.quantityButton}
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <YellowButton
              label={t('AddToCart')}
              size="md"
              action="add-to-cart"
              icon={logo}
            />
            <button className={style.shareButton1}>
              <Image src={shareLogo} alt={t('Share')} width={20} height={20} />
            </button>
          </div>

          <div className={style.actions}>
            <button className={style.shareButton}>
              <Image src={shareLogo} alt={t('Share')} width={20} height={20} />
            </button>

            <p className={style.freeShipping}>
              {t('FreeShipping')} <span>10 000 ₸</span>{' '}
              {t('FreeShippingLocation')}
            </p>

            <button className={style.priceListButton}>
              <a
                href="/images/pavel.png"
                download
                className={style.downloadLink}
              >
                {t('PriceList')}{' '}
                <Image
                  src={downloadLogo}
                  alt={t('Download')}
                  width={11}
                  height={12}
                />
              </a>
            </button>
          </div>

          <div className={style.characteristicsList}>
            <p>
              {t('Producer')}:
              <span className={style.characteristics}> {product.producer}</span>
            </p>
            <p>
              {t('Brand')}:
              <span className={style.characteristics}> {product.brand}</span>
            </p>
            <p>
              {t('Barcode')}:
              <span className={style.characteristics}> {product.article}</span>
            </p>
            <p>
              {t('Category')}:{' '}
              <span className={style.characteristics}>
                {product.category.join(', ')}
              </span>
            </p>
          </div>

          <div className={style.description}>
            <h2 onClick={toggleDescription} className={style.descriptionTitle}>
              {t('Description')}
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: isDescriptionOpen ? 240 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDescriptionOpen ? '▴' : '▾'}
              </motion.span>
            </h2>
            <motion.p
              className={style.descriptionText}
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{
                opacity: isDescriptionOpen ? 1 : 0,
                maxHeight: isDescriptionOpen ? 200 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {product.description}
            </motion.p>
          </div>
          <div className={style.divider}></div>
          <div className={style.webWeaversGame}>
            <div
              onMouseEnter={moveText}
              onClick={openGitHub}
              className={style.webWeavers}
              style={{ top: position.top, left: position.left }}
            >
              {t('ClickMe')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
