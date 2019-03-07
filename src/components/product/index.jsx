import * as React from 'react';
import * as styles from './styles';

const Product = ({product}) => {
  const {
    title,
    description,
    image,
    currency,
    priceLabel,
    productLabel,
    cta,
    ctaLink,
  } = product;
  const price = (product.price / 100).toFixed(2);

  return <div className={styles.container}>
    <div className={styles.image}>
      <img width="300px" src={image.path} alt={image.alt} />
    </div>
    {<div className={styles.label(!productLabel)}>
      {productLabel}
    </div>}
    <div className={styles.title}>
      <h1>{title}</h1>
    </div>
    <div className={styles.description}>
      <span>{description}</span>
    </div>
    <div className={styles.priceContainer}>
      {priceLabel}
      <span className={styles.price}> {`${currency}${price}`}</span>
    </div>
    <div className={styles.cta}>
      <a href={ctaLink}>{cta}</a>
    </div>
  </div>;
};

export default Product;

