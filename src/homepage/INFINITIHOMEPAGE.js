
import React, { useState, useCallback } from "react";
import styles from "./INFINITIHOMEPAGE.module.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ProductItem from "../PRODUCT_DIS/ProductItem";

const INFINITIHOMEPAGE = () => {

  const products = [
    {
      id: 2,
      name: "Digital Watch",
      price: 60,
      imageUrl: "/watch.jpg",
    },
    {
      id: 1,
      name: "RGB Keyboard",
      price: 80,
      imageUrl: "/keyboard.jpg",
    },
    {
      id: 3,
      name: "Glasses",
      price: 100,
      imageUrl: "/glasses1.jpg",
    },
    {
      id: 1,
      name: "RGB Keyboard",
      price: 150,
      imageUrl: "/keyboard.jpg",
    },
  ];

  const [searchText, setSearchText] = useState("");

  const onSearchTextChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  return (
    <div className={styles.infinitiHomepage}>
      <img className={styles.frame6841} alt="" src="/f5.png" />
      <img className={styles.frame7381} alt="" src="/f6.png" />
      <i className={styles.infiniti}>INFINITI</i>
      <img className={styles.infinitiHomepageChild} alt="" src="/pic.png" />
      <div className={styles.infinitiHomepageItem} />
      <img className={styles.frame7351} alt="" src="/f1.png" />
      <img className={styles.frame7301} alt="" src="/f2.png" />
      <img className={styles.frame56011} alt="" src="/f4.png" />
      <img className={styles.footer1Icon} alt="" src="/homeFooter.png" />
      <i className={styles.infiniti1}>INFINITI</i>
      <div className={styles.placeboxInfo}>
        <div className={styles.placeToInfoBox}>
       
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            placeholder="Enter your search..."
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.infiniti2}>INFINITI</div>
      <img className={styles.frame9271} alt="" src="/topHomeBar.png" />
      <div className={styles.productCatalog}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              className={styles.productImage}
              src={product.imageUrl}
              alt={product.name}
            />
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productPrice}>${product.price}</div>
            <Link to={`/product${product.id}`}>BUY NOW</Link>
          </div>
        ))}
            <div className={styles.ourProductsText}>
             <h2>OUR PRODUCTS</h2>
            </div>
      </div>

      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
    </div>
  );
};

export default INFINITIHOMEPAGE;