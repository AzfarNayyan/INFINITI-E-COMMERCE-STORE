import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.infiniti}>INFINITI</div>
      <img className={styles.topbar13} alt="" src="/topAdmin.png" />
      <img className={styles.frame9321} alt="" src="/Frame 932.png" />
      <img className={styles.footer111} alt="" src="/Footer 1.png" />
      <i className={styles.dashboard1}>DASHBOARD</i>
      <i className={styles.totalSales000Container}>
        <p
          className={styles.blankLine}
        >{`TOTAL SALES:   0.00$`}</p>
      </i>
    </div>
  );
};

export default Dashboard;