import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/images/Products/telejka.svg';
import style from '@/components/ProductCard/ProductDetails.module.css';
import YellowButton from '../UI/YellowButton/YellowButton';
import shareLogo from '@/public/images/ProductDetails/share.svg';
import downloadLogo from '@/public/images/ProductDetails/download.svg';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));
  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);

  return (
    <div className={style.container}>
      <div className={style.productDetails}>
        <div className={style.imageSection}>
          <Image
            src={product.imgSrc}
            alt={product.title}
            layout="responsive"
            width={350}
            height={350}
            className={style.productImage}
          />
        </div>

        <div className={style.infoSection}>
          <p className={style.inStock}>В наличии</p>
          <h1 className={style.productTitle}> 
            <span className={style.productBrand}>{product.brand}</span> {product.title}
            </h1>
          <p className={style.productVolume}>
          <span>
                <Image src={product.volumeType} 
                alt="Volume Type" 
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
                <button className={style.quantityButton} onClick={decrementQuantity}>-</button>
                <span className={style.quantity}>{quantity}</span>
                <button className={style.quantityButton} onClick={incrementQuantity}>+</button>
            </div>
            <YellowButton
              label="В КОРЗИНУ"
              size="md"
              action="add-to-cart"
              icon={logo}
            />
          </div>

          <div className={style.actions}>
            <button className={style.shareButton}>
              <Image src={shareLogo} alt="Share" width={20} height={20} />
            </button>

            <p className={style.freeShipping}>
            При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области
          </p>

            <button className={style.priceListButton}>
                Прайс-лист
              <Image src={downloadLogo} alt="Download" width={11} height={12} />
            </button>
          </div>

          <div className={style.characteristicsList}>
            <p >Производитель: 
               <span className={style.characteristics} >
               {product.producer}
                </span> 
            </p>
            <p>Бренд: 
            <span className={style.characteristics} >
               {product.brand}
                </span> 
            </p>
            <p>Артикул:
                <span className={style.characteristics} >
               {product.article}
                </span> 
            </p>
            <p>Категория: 
                <span className={style.characteristics} >
                {product.category.join(', ')}
                </span> 
            </p>
          </div>



          <div className={style.description}>
      <h2 onClick={toggleDescription} className={style.descriptionTitle}>
        Описание
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
          maxHeight: isDescriptionOpen ? 200 : 0, // Максимальная высота текста
        }}
        transition={{ duration: 0.3 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo,
        vestibulum sagittis iaculis iaculis. Maecenas...
      </motion.p>
    </div>
    


    <div className={style.divider}></div>

    <div >1203812038019825409185-029812-0589</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
