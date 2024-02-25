import { useCallback } from "react";
import styles from "./BILLING.module.css";
import React, { useState, useEffect } from "react";

const BILLING = () => {

  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [optionalAddress, setOptionalAddress] = useState("");
  const [townCity, setTownCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const onFirstNameChange = useCallback((e) => {
    setFirstName(e.target.value);
  }, []);

  const onCompanyNameChange = useCallback((e) => {
    setCompanyName(e.target.value);
  }, []);

  const onStreetAddressChange = useCallback((e) => {
    setStreetAddress(e.target.value);
  }, []);

  const onOptionalAddressChange = useCallback((e) => {
    setOptionalAddress(e.target.value);
  }, []);

  const onTownCityChange = useCallback((e) => {
    setTownCity(e.target.value);
  }, []);

  const onPhoneNumberChange = useCallback((e) => {
    setPhoneNumber(e.target.value);
  }, []);

  const onEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const [showMiniScreen, setShowMiniScreen] = useState(false);

  const handlePlaceOrder = () => {

    console.log("Placing order with the following details:", {
      firstName,
      companyName,
      streetAddress,
      optionalAddress,
      townCity,
      phoneNumber,
      email,
    });

    setShowMiniScreen(true);

    setTimeout(() => {
      setShowMiniScreen(false);
    }, 5000);


  };

  useEffect(() => {
    return () => setShowMiniScreen(false);
  }, []);

  return (
    <div className={styles.billing}>
      <div className={styles.billing}>
      <div className={styles.frameParent3}>
        <div className={styles.frameParent4}>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>First Name</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              type="text"
              value={firstName}
              onChange={onFirstNameChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>CARD NUMBER</div>
            <input
              type="text"
              value={companyName}
              onChange={onCompanyNameChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>Street Address</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              type="text"
              value={streetAddress}
              onChange={onStreetAddressChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              Apartment, floor, etc. (optional)
            </div>
            <input
              type="text"
              value={optionalAddress}
              onChange={onOptionalAddressChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>Town/City</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              type="text"
              value={townCity}
              onChange={onTownCityChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>Phone Number</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              type="text"
              value={phoneNumber}
              onChange={onPhoneNumberChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>
              <span>Email Address</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              type="text"
              value={email}
              onChange={onEmailChange}
              className={styles.inputField}
            />
          </div>
          {showMiniScreen && (
        <div className={styles.miniScreen}>
          <div className={styles.miniScreenContent}>
            <h2>Order Placed Successfully!</h2>
            <p>
              Thank you, {firstName}, for placing your order. Your confirmation
              details have been sent to {email}.
            </p>
          </div>
        </div>
      )}
        </div>

      </div>
    </div>
    
      <div className={styles.infiniti}>INFINITI</div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      
      <div className={styles.frameParent}>
        <div />
        <div className={styles.frameGroup}>
          <div className={styles.frameGroup}>
            <div className={styles.frameGroup}>
              <div className={styles.frameGroup}>
                <div className={styles.subtotalParent}>
                  <div className={styles.home}>Subtotal:</div>
                  <div className={styles.home}>$1750</div>
                </div>
              </div>
              <div className={styles.shippingParent}>
                <div className={styles.home}>Shipping:</div>
                <div className={styles.home}>Free</div>
              </div>
            </div>
          </div>
          <div className={styles.totalParent}>
            <div className={styles.home}>Total:</div>
            <div className={styles.home}>$1750</div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.radioButtonParent}>
            <div className={styles.home}>Bank</div>
          </div>
          <div className={styles.visaParent}>
        
          </div>
        </div>
        <div className={styles.radioButtonParent}>
          <div className={styles.home}>Cash on delivery</div>
        </div>
        <div className={styles.button}>
        <div
          className={styles.placeOrderButton}
          onClick={handlePlaceOrder}
        >
          Place Order
        </div>
      </div>
      </div>
      <div className={styles.billingDetailsWrapper}>
        <div className={styles.billingDetails}>Billing Details</div>
      </div>
      <img className={styles.footer1Icon} alt="" src="/homeFooter.png" />
      
    </div>
  );
};

export default BILLING;