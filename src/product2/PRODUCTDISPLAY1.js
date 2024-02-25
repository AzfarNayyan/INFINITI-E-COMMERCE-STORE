import { useCallback, useState } from "react";
import styles from "./PRODUCTDISPLAY1.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const PRODUCTDISPLAY1 = () => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const onShareProductClick = useCallback(() => {
   
    navigator.clipboard.writeText(window.location.href);
    setIsLinkCopied(true);
   
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.productDisplay}>
      <div className={styles.infiniti}>INFINITI</div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.gamingKeyboard}>Digital Watch</div>
      <div className={styles.div}>$69.00</div>
      <div className={styles.rgbGamingKeyboard}>
      Discover the perfect blend of sophistication and technology with our exclusive collection of digital watches at INFINTI STORE.
      </div>
      <div className={styles.button1}>
        <div className={styles.addToCart}>
        <Link to={`/review`}>ADD REVIEW</Link>
        </div>
        <div className={styles.addToCart1} onClick={onShareProductClick}>
               SHARE PRODUCT
        </div>
        <div className={styles.addToCart2}>
          <Link to={`/bill`}>BUY NOW</Link>
        </div>
      </div>
      {isLinkCopied && (
    <div className={styles.linkCopiedModal}>
      <div className={styles.linkCopiedMessageBox}>
        <div className={styles.linkCopiedMessage}>LINK COPIED</div>
      </div>
    </div>)}

      <img className={styles.footer1Icon} alt="" src="/homeFooter.png" />
      <img className={styles.frame9311} alt="" src="/watch.jpg" />
    </div>
  );
};

export default PRODUCTDISPLAY1;