
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import styles from "./LOGIN.module.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


const LOGIN = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    navigate(`/`);
  };

  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <div className={styles.searchComponentSetParent}>
          <div className={styles.centeredGoogleLogin}>
            <GoogleOAuthProvider clientId="886302518859-fkvi895pf6t8i8svsd8hi46fbfp89n53.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
      <img className={styles.frame7662} alt="" src="/login.png" />;
      <img
        className={styles.ecommerceWebsiteDesign2Icon}
        alt=""
        src="/designPic.png"
      />
      <div className={styles.infiniti}>INFINITI</div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <img className={styles.footer1Icon} alt="" src="/homeFooter.png" />
    </div>
  );
};

export default LOGIN;