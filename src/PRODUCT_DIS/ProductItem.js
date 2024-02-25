
import React from "react";
import styles from "./ProductItem.module.css"; 

const ProductItem = ({ name, price, imageUrl }) => {
  return (
    <div className={styles.productItem}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
