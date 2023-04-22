import './index.css'
import React from "react";
import myimage from './Untitled.png';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { closeOutline } from 'ionicons/icons';
import { chevronUpOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Nav from './nav';

function CU() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://vq.pe/creator/frontend/theme_9/css/style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Comforter+Brush&family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <title>Travel Qila</title>
      <meta name="description" content="My First Website" />
      {/* Google tag (gtag.js) */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
      <link href="https://vq.pe/creator/frontend/global/css/main.css?v=1678519628" rel="stylesheet" />
      <header className="header" data-header>
        <div className="container">
        <Link to="/">
            <h1><img src={myimage} alt="Travel Qila" id="c_41" className="img-fluid logo dynamic c_logo" /></h1>
          </Link>
          <button className="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu" onFocus={Nav} onClick={Nav}>
            <IonIcon icon={menuOutline} className="open" />
            <IonIcon icon={closeOutline} className="close" />
          </button>
          <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <a href="/" className="navbar-link">Home</a>
              </li>
              <li>
                <a href="#c_25" className="navbar-link">About us</a>
              </li>
              <li>
              <Link to="/contact-us" className="navbar-link">Contact Us</Link>
              </li>
              <li>
                <a href="https://affiliate.klook.com/redirect?aid=29077&aff_adid=660160&k_site=https%3A%2F%2Fwww.klook.com%2F" target="_blank" className="navbar-link">Sightseeings</a>
              </li>
              <li>
                <a href="https://www.calculator.net/currency-calculator.html" target="_blank" className="navbar-link">Currency Converter</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="c_content_div">
        <form><input type="hidden" name="website_name" id="website_name" defaultValue="Travel Qila" /></form>
        {/* <div class="custom_container">
  </div>
  <div id="show_more" style="text-align:center"><a onclick="printWebsiteWorks(0);" id="print_website_works" class="custom_button green">View More</a></div> */}
      </div>
      <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n        @media print {\n            .form-section {\n                display: inline !important\n            }\n\n            .form-pagebreak {\n                display: none !important\n            }\n\n            .form-section-closed {\n                height: auto !important\n            }\n\n            .page-section {\n                position: initial !important\n            }\n        }\n    " }} />
      <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.40070&themeRevisionID=5f7ed99c2c2c7240ba580251" />
      <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/css/styles/payment/payment_styles.css?3.3.40070" />
      <link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_feature.css?3.3.40070" />
      <form className="jotform-form" action="contact.php" method="post" name="form_230686073785466" id={230686073785466} acceptCharset="utf-8" autoComplete="on"><input type="hidden" name="formID" defaultValue={230686073785466} /><input type="hidden" id="JWTContainer"  /><input type="hidden" id="cardinalOrderNumber"  />
        <div role="main" className="form-all">
          <ul className="form-section page-section">
            <li id="cid_10" className="form-input-wide" data-type="control_head">
              <div className="form-header-group header-large">
                <div className="header-text httal htvam">
                  <h1 id="header_10" className="form-header" data-component="header" style={{ textAlign: 'center' }}>
                    Contact Us</h1>
                  <div id="subHeader_10" className="form-subHeader">We would love to be in touch with you! Please
                    sign up to receive emails from us! </div>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_text" id="id_25">
              <div id="cid_25" className="form-input-wide" data-layout="full">
                <div id="text_25" className="form-html" data-component="text" tabIndex={0}>
                  <p><span style={{ fontSize: '12pt' }}><strong>Please complete all information
                    below:</strong></span></p>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_fullname" id="id_27"><label className="form-label form-label-top form-label-extended form-label-auto" id="label_27" htmlFor="prefix_27"> Name </label>
              <div id="cid_27" className="form-input-wide" data-layout="full">
                <div data-wrapper-react="true" className="extended"><span className="form-sub-label-container" style={{ verticalAlign: 'top' }} data-input-type="prefix"><input type="text" placeholder="Mr." id="prefix_27" name="name" className="form-textbox"  autoComplete="section-input_27 honorific-prefix" size={4}  data-component="prefix" aria-labelledby="label_27 sublabel_27_prefix" /><label className="form-sub-label" htmlFor="prefix_27" id="sublabel_27_prefix" style={{ minHeight: 13 }} aria-hidden="false">Mr./Mrs./Ms.</label></span><span className="form-sub-label-container" style={{ verticalAlign: 'top' }} data-input-type="first"><input type="text" placeholder="John" id="first_27" name="first_name" className="form-textbox"  autoComplete="section-input_27 given-name" size={10}  data-component="first" aria-labelledby="label_27 sublabel_27_first" /><label className="form-sub-label" htmlFor="first_27" id="sublabel_27_first" style={{ minHeight: 13 }} aria-hidden="false">First Name</label></span><span className="form-sub-label-container" style={{ verticalAlign: 'top' }} data-input-type="last"><input type="text" placeholder="Doe" id="last_27" name="last_name" className="form-textbox"  autoComplete="section-input_27 family-name" size={15}  data-component="last" aria-labelledby="label_27 sublabel_27_last" /><label className="form-sub-label" htmlFor="last_27" id="sublabel_27_last" style={{ minHeight: 13 }} aria-hidden="false">Last
                  Name</label></span></div>
              </div>
            </li>
            <li className="form-line" data-type="control_textbox" id="id_2"><label className="form-label form-label-top form-label-auto" id="label_2" htmlFor="input_2"> E-mail </label>
              <div id="cid_2" className="form-input-wide" data-layout="half"> <input type="text" placeholder="johndoe@gmail.com" id="input_2" name="email" data-type="input-textbox" className="form-textbox"  style={{ width: 310 }} size={310}  data-component="textbox" aria-labelledby="label_2" /> </div>
            </li>
            <li className="form-line" data-type="control_phone" id="id_11"><label className="form-label form-label-top form-label-auto" id="label_11" htmlFor="input_11_full"> Phone
            </label>
              <div id="cid_11" className="form-input-wide" data-layout="half"> <span className="form-sub-label-container" style={{ verticalAlign: 'top' }}><input type="tel" id="input_11_full" name="phone" data-type="mask-number" className="mask-phone-number form-textbox validate[Fill Mask]"  autoComplete="section-input_11 tel-national" style={{ width: 310 }} data-masked="true"  placeholder="+91 9995551134" data-component="phone" aria-labelledby="label_11" /><label className="form-sub-label is-empty" htmlFor="input_11_full" id="sublabel_11_masked" style={{ minHeight: 13 }} aria-hidden="false" /></span>
              </div>
            </li>
            <li className="form-line" data-type="control_address" id="id_12"><label className="form-label form-label-top form-label-auto" id="label_12" htmlFor="input_12_addr_line1">
              Address </label>
              <div id="cid_12" className="form-input-wide" data-layout="full">
                <div summary className="form-address-table jsTest-addressField">
                  <div className="form-address-line-wrapper jsTest-address-line-wrapperField"><span className="form-address-line form-address-street-line jsTest-address-lineField"><span className="form-sub-label-container" style={{ verticalAlign: 'top' }}><input type="text" id="input_12_addr_line1" placeholder="123 Maple Street" name="q12_address[addr_line1]" className="form-textbox form-address-line"  autoComplete="section-input_12 address-line1"  data-component="address_line_1" aria-labelledby="label_12 sublabel_12_addr_line1" required /><label className="form-sub-label" htmlFor="input_12_addr_line1" id="sublabel_12_addr_line1" style={{ minHeight: 13 }} aria-hidden="false">Street
                    Address</label></span></span></div>
                  <div className="form-address-line-wrapper jsTest-address-line-wrapperField"><span className="form-address-line form-address-street-line jsTest-address-lineField"><span className="form-sub-label-container" style={{ verticalAlign: 'top' }}><input type="text" id="input_12_addr_line2" name="q12_address[addr_line2]" className="form-textbox form-address-line"  autoComplete="section-input_12 address-line2"  data-component="address_line_2" aria-labelledby="label_12 sublabel_12_addr_line2" /><label className="form-sub-label" htmlFor="input_12_addr_line2" id="sublabel_12_addr_line2" style={{ minHeight: 13 }} aria-hidden="false">Street Address Line
                    2</label></span></span></div>
                  <div className="form-address-line-wrapper jsTest-address-line-wrapperField"><span className="form-address-line form-address-city-line jsTest-address-lineField "><span className="form-sub-label-container" style={{ verticalAlign: 'top' }}><input type="text" id="input_12_city" placeholder="Anytown" name="q12_address[city]" className="form-textbox form-address-city"  autoComplete="section-input_12 address-level2"  data-component="city" aria-labelledby="label_12 sublabel_12_city" required /><label className="form-sub-label" htmlFor="input_12_city" id="sublabel_12_city" style={{ minHeight: 13 }} aria-hidden="false">City</label></span></span><span className="form-address-line form-address-state-line jsTest-address-lineField "><span className="form-sub-label-container" style={{ verticalAlign: 'top' }}><input type="text" id="input_12_state" placeholder="Pennsylvania" name="q12_address[state]" className="form-textbox form-address-state"  autoComplete="section-input_12 address-level1"  data-component="state" aria-labelledby="label_12 sublabel_12_state" required /><label className="form-sub-label" htmlFor="input_12_state" id="sublabel_12_state" style={{ minHeight: 13 }} aria-hidden="false">State /
                    Province</label></span></span></div>
                  <div className="form-address-line-wrapper jsTest-address-line-wrapperField"><span className="form-address-line form-address-zip-line jsTest-address-lineField "><span className="form-sub-label-container" style={{ verticalAlign: 'top' }}><input type="text" id="input_12_postal" placeholder={17101} name="q12_address[postal]" className="form-textbox form-address-postal"  autoComplete="section-input_12 postal-code"  data-component="zip" aria-labelledby="label_12 sublabel_12_postal" required /><label className="form-sub-label" htmlFor="input_12_postal" id="sublabel_12_postal" style={{ minHeight: 13 }} aria-hidden="false">Postal / Zip
                    Code</label></span></span></div>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_textarea" id="id_24"><label className="form-label form-label-top form-label-auto" id="label_24" htmlFor="input_24"> Comments,
              Questions, or Suggestions </label>
              <div id="cid_24" className="form-input-wide" data-layout="full"> <textarea id="input_24" className="form-textarea" name="comments" style={{ width: 648, height: 163 }} data-component="textarea" aria-labelledby="label_24" defaultValue={""} /> </div>
            </li>
            <li className="form-line" data-type="control_button" id="id_9">
              <div id="cid_9" className="form-input-wide" data-layout="full">
                <div data-align="auto" className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField"><button id="input_9" name="submit" type="submit" className="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content>Submit</button></div>
              </div>
            </li>
            <li style={{ display: 'none' }}>Should be Empty: <input type="text" name="website"  /></li>
          </ul>
        </div>
        {/* <input type="hidden" class="simple_spc" id="simple_spc"
      name="simple_spc" value="230686073785466" />
   */}
        {/* <div class="formFooter-heightMask"></div>
  <div class="formFooter f6 branding21">
      <div class="formFooter-wrapper formFooter-leftSide"><a
              href="https://www.jotform.com/?utm_source=formfooter&utm_medium=banner&utm_term=230686073785466&utm_content=jotform_logo&utm_campaign=powered_by_jotform_le"
              target="_blank" class="formFooter-logoLink"><img class="formFooter-logo"
                  src="https://cdn.jotfor.ms/assets/img/logo2021/jotform-logo-white.svg" alt="Jotform Logo"
                  style="height: 44px;"></a></div>
      <div class="formFooter-wrapper formFooter-rightSide">
          <span class="formFooter-text">Now create your own Jotform - It's free!</span><a class="formFooter-button" href="https://www.jotform.com/?utm_source=formfooter&utm_medium=banner&utm_term=230686073785466&utm_content=jotform_button&utm_campaign=powered_by_jotform_le" target="_blank">Create your own Jotform</a></div> </div> */}
      </form>
      <section id="s_5" className="cdis  ">
        <footer className="footer" style={{ backgroundImage: 'url("./assets/images/footer-bg.png")' }}>
          <div className="container">
            <div className="footer-top">
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title dynamic" id="c_42">Travel Qila</p>
                </li>
                <li>
                  <p id="c_43" className="dynamic">We believe that travel is not just about the destination, but the journey.
                    Let us be your guide on this incredible journey of discovery.</p>
                </li>
                <br /><br /><br />
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/terms">Terms&Conditions</Link>
                  <Link to="/refund">Refund&Cancelation</Link>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title dynamic" id="c_44">Contact Us</p>
                </li>
                <p className="footer-text dynamic" id="c_34"> <b>Contact No:</b><br /> <a href="https://wa.me/+919871101345" style={{ color: 'inherit' }} target="_blank">+91 9871101345,</a><br /><b>Email:</b><a href="mailto:rohit@travelqila.com" target="_blank">rohit@travelqila.com</a></p>
                <p className="footer-text dynamic" id="c_34"><br /><b>Address:</b><br />
                  Office No. 80-D, 3rd Floor, Block-ED, Madhuban Chowk, Pitam Pura, New Delhi-110034</p>
              </ul>
              <div className="footer-list">
                <p className="footer-list-title dynamic" id="c_45">Follow Us</p>
                <ul className="social-list">
                  <li>
                    <a style={{ fontSize: 30 }} id="c_47" icon="bi-facebook" className="dynamic bi-facebook" href="#" />
                  </li>
                  <li>
                    <a style={{ fontSize: 30 }} id="c_48" icon="bi-twitter" className="dynamic bi-twitter" href="#" />
                  </li>
                  <li>
                    <a style={{ fontSize: 30 }} id="c_49" icon="bi-instagram" className="dynamic bi-instagram" href="https://www.instagram.com/travelqila_official/" />
                  </li>
                </ul>
              </div>
              <div className="footer-list">
                <p className="footer-list-title dynamic" id="c_46">Send Us a Message</p>
                <form className="newsletter-form" onsubmit="formAjax(event,this)" encType="multipart/form-data" controller_name="ActionController" function_name="contactForm">
                  <input style={{ width: '100%', padding: 10, margin: '2px 0' }} type="hidden" name="website_id" defaultValue={11716} />
                  <input style={{ width: '100%', padding: 10, margin: '2px 0' }} type="text" name="name" required placeholder="Full Name" className="newsletter-input" />
                  <input style={{ width: '100%', padding: 10, margin: '2px 0' }} type="email" name="email" required placeholder="Email address" className="newsletter-input" />
                  <input style={{ width: '100%', padding: 10, margin: '2px 0' }} type="tel" name="phone" required placeholder="Phone" className="newsletter-input" />
                  <textarea style={{ width: '100%', padding: 10, margin: '2px 0' }} name="message" required placeholder="Message" className="newsletter-input" defaultValue={""} />
                  <div id="notice" />
                  <button style={{ width: '100%', position: 'relative' }} type="submit" className="btn btn-primary">Send</button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </section>
      {/* 
    - #GO TO TOP
  */}
      <a href="#top" className="go-top" data-go-top aria-label="Go To Top">
        <IonIcon icon={chevronUpOutline} />
      </a>
      <div className="editor_notice_div" id="editor_notice" />
      <div id="editor">
        <form action="#" method="post">
          <input type="hidden" name="_token" defaultValue="GSzYZDHW5Qc4sLoJh4WUsN8lxyxMXEWhWXONJSZG" />
          <input type="hidden" name="website_id" defaultValue={11716} />
          <input type="hidden" name="theme_id" defaultValue={9} />
        </form>
      </div>
      <div id="modal_io" />
    </div>

  );
}

export default CU;