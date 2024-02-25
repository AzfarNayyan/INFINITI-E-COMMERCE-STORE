import styles from "./ADMINLOGIN.module.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


const ADMINLOGIN = () => {
  return (
    <div className={styles.adminLogin}>
      <img className={styles.logoIcon} alt="" src="/LOGO.png" />
      <i className={styles.loginAsAdmin}>LOGIN AS ADMIN</i>
      <img className={styles.topbar1Icon} alt="" src="/topAdmin.png" />
      <img className={styles.footer11} alt="" src="/adminfooter.png" />
      <div className={styles.centeredGoogleLogin}></div>
      <GoogleOAuthProvider clientId="886302518859-fkvi895pf6t8i8svsd8hi46fbfp89n53.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
             onError={() => {
             console.log('Login Failed');
            }}
            />
          </GoogleOAuthProvider>
      <img className={styles.frame7663} alt="" src="/adminlogin.png" />
    </div>
  );
};

export default ADMINLOGIN;