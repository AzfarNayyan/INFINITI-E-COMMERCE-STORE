import { useCallback, useState } from "react";
import styles from "./REVIEW.module.css";

const REVIEW = () => {
  const [userReview, setUserReview] = useState("");

  const onReviewChange = useCallback((e) => {

    setUserReview(e.target.value);
  }, []);

  const handleWriteReview = () => {
    console.log("User's Review:", userReview);
  }

  return (
    <div className={styles.review}>
      <div className={styles.infiniti}>INFINITI</div>
      <div className={styles.reviewSection}>
        <div className={styles.reviewSection1}>
          <div className={styles.review1}>
            <div className={styles.customerReviews}>Customer Reviews</div>
          </div>
          <div className={styles.feedbackFormoffon}>
            <div className={styles.feedbackForm}>
              <div className={styles.feedbackFormChild} />
              <textarea
                value={userReview}
                onChange={onReviewChange}
                placeholder="Write your review here..."
                className={styles.reviewTextArea}
              />
              <div className={styles.buttons}>
                <div className={styles.button} onClick={handleWriteReview}>
                  <div className={styles.showMore}>WRITE A REVIEW TO PRODUCT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <img className={styles.footer1Icon} alt="" src="/homeFooter.png" />
      <img
        className={styles.commentSection1}
        alt=""
        src="/Comment section 1.png"
      />
    </div>
  );
};

export default REVIEW;