import { useCallback } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <div className={styles.searchComponentSetParent}>
          <div className={styles.wishlistParent}>
            <img className={styles.wishlistIcon} alt="" src="/wishlist.svg" />
          </div>
        </div>
      </div>
      
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.infiniti}>INFINITI</div>
      <img className={styles.logoIcon1} alt="" src="/logo1@2x.png" />
      <img className={styles.frame8581} alt="" src="/contact.png" />
      <img className={styles.footer1Icon} alt="" src="/homeFooter.png" />
      
    </div>
  );
};

export default Contact;
