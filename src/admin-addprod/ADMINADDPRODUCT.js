import React, { useState } from "react";
import styles from "./ADMINADDPRODUCT.module.css";

const ADMINADDPRODUCT = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);

  return (
    <div className={styles.adminaddProduct}>
      <div className={styles.labelLnameContainer}>
        <p className={styles.discription}>Description:</p>
      </div>
      <b className={styles.titleSignIn}>ADD PRODUCT</b>
      <div className={styles.labelFname}>Name:</div>
      <div className={styles.labelMname}>Price:</div>
      <b className={styles.addPicture}>Add Picture:</b>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className={styles.inputField2}
        placeholder="Enter product name"
      />
      <input
        type="text"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className={styles.inputField}
        placeholder="Enter product price"
      />
        <textarea
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        className={styles.inputField1}
        placeholder="Enter product description"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProductImage(e.target.files[0])}
        className={styles.inputField3}
      />
    
      <div
        className={styles.txtSignIn}
        onClick={() =>
          console.log("Add Product", {
            name: productName,
            price: productPrice,
            description: productDescription,
            image: productImage,
          })
        }
      >
        ADD
      </div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.infiniti}>INFINITI</div>
      <img className={styles.topbar11} alt="" src="/topAdmin.png" />
    </div>
  );
};

export default ADMINADDPRODUCT;