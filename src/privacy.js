import React from 'react';
import './index.css'
import myimage from './Untitled.png';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { closeOutline } from 'ionicons/icons';
import { chevronUpOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Nav from './nav';

function privacy() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://vq.pe/creator/frontend/theme_9/css/style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Comforter+Brush&family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <title>travelqila</title>
      <meta name="description" content="My First Website" />
      {/* Google tag (gtag.js) */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
      <link href="https://vq.pe/creator/frontend/global/css/main.css?v=1678433361" rel="stylesheet" />
      <header className="header" data-header style={{ maxHeight: 900, maxWidth: 9000 }}>
        <div className="container">
        <Link to="/">
            <h1><img src={myimage} alt="Travel Qila" id="c_41" className="img-fluid logo dynamic c_logo" /></h1>
          </Link>
          <button className="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu" onClick={Nav} onFocus={Nav}>
            <IonIcon icon={menuOutline} className="open" />
            <ionIcon icon={closeOutline} className="close" />
          </button>
          <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <a href="index.html" className="navbar-link">Home</a>
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
                <a href="https://www.calculator.net/currency-calculator.html" target="_blank" className="navbar-link">Currency
                  Converter</a>
              </li>
              <li>
                <a href="Payment.html" target="_blank" className="navbar-link">Pay Safely</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container"><br /><br />
          <h2>Privacy Policy for Travel Qila</h2> <br/>
          <p>At Travel Qila, we take your privacy very seriously. This privacy policy explains how we collect, use, and
            protect your personal information. By using our services, you agree to the terms of this privacy policy.</p>
          <ul><br/>
            <li><h4>Information we collect:</h4></li><br/>
            <p>We may collect personal information, such as your name, email address, phone number, and billing information,
              when you make a reservation or purchase travel products through our website or over the phone. We may also
              collect information about your travel preferences and interests to better serve your needs.</p><br/>
            <li><h4>How we use your information:</h4></li><br/>
            <p>We use your personal information to process your travel reservations and purchases, communicate with you
              about your travel plans, and provide you with information about travel-related products and services that
              may interest you. We may also use your information to improve our website and services, and to comply with
              legal obligations.</p><br/>
            <li><h4>How we share your information:</h4></li><br/>
            <p>We may share your personal information with third-party service providers, such as airlines, hotels, car
              rental agencies, and tour operators, to fulfill your travel reservations and purchases. We may also share
              your information with our marketing partners to provide you with information about travel-related products
              and services that may interest you. We will not sell your personal information to third parties.</p><br/>
            <li><h4>Security:</h4></li><br/>
            <p>We use reasonable security measures to protect your personal information from unauthorized access, use, or
              disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, so we
              cannot guarantee absolute security.</p><br/>
            <li><h4>Your choices:</h4></li><br/>
            <p>You may choose not to provide us with certain personal information, but this may limit your ability to use
              certain features of our website or to make travel reservations and purchases. You may also choose to opt-out
              of receiving marketing emails from us by following the instructions in the email.</p><br/>
            <li><h4>Changes to this policy:</h4></li><br/>
            <p>We may update this privacy policy from time to time. Any changes will be posted on our website, and the
              revised policy will be effective immediately upon posting.</p><br/>
            <li><h4>Contact us:</h4></li><br/>
            <p>If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:info@travelqila.com">info@tavelqila.com.</a></p>
          </ul>
          <p>Last updated: April 18, 2023.</p>
        </div>
      </main>
      <br /><br /><br />
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
          <input type="hidden" name="_token" defaultValue="ABz5pDPosBQyB3L6uaBePHXGG2f0oO4BJxpV7tcP" />
          <input type="hidden" name="website_id" defaultValue={11716} />
          <input type="hidden" name="theme_id" defaultValue={9} />
        </form>
      </div>
      <div id="modal_io" />
      {/* 
    - custom js link
  */}
      {/* 
    - ionicon link
  */}
      {/* <div class="c_footer_watermark"><b>Design & Developed By <a style="display: inline;"
  href="https://www.instagram.com/i.am_imperialx/">Imperialx<a></b></div> */}
    </div>

  );
}

export default privacy;