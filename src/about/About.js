import { useCallback } from "react";
import styles from "./About.module.css";

const About = () => {

  return (
    <div className={styles.about}>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.infiniti}>INFINITI</div>
      <i className={styles.developers}>Developers</i>
      <img className={styles.footer1Icon} alt="" src="/homeFooter.png" />
      <img className={styles.frame8901} alt="" src="/devpics.png" />
      <img className={styles.sideImage1} alt="" src="/aboutourself.png" />
    </div>
  );
};

export default About;