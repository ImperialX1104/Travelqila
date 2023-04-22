import React from "react";
import myimage from './Untitled.png';
import './index.css'
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { closeOutline } from 'ionicons/icons';
import { chevronUpOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Nav from './nav';

function refund() {
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
                <a href="https://www.calculator.net/currency-calculator.html" target="_blank" className="navbar-link">Currency
                  Converter</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container"><br /><br />
          <section>
            <h1>Cancellation and Refund Policy for <b>Travel Qila</b></h1>
            <p>We at <b>Travel Qila</b> understand that plans can change unexpectedly. We strive to make the cancellation
              and refund process as simple and fair as possible for our customers. Please read our cancellation and refund
              policy carefully before booking any travel arrangements with us.</p>
            <br /><br /><h4>Cancellation Policy</h4>
            <ul>
              <li><p>If you need to cancel your travel arrangements, you must notify us in writing by email or letter as soon as
                possible.</p></li>
              <li><p>The cancellation charges will be applicable as follows:</p></li>
              <ol>
                <li>If you cancel your travel arrangements more than 30 days before the departure date, we will refund 80%
                  of the total booking amount.</li>
                <li>If you cancel your travel arrangements between 15 and 30 days before the departure date, we will refund
                  50% of the total booking amount.</li>
                <li>If you cancel your travel arrangements less than 15 days before the departure date, no refund will be
                  provided.</li>
              </ol>
              <li><p>Please note that cancellation fees may also apply to certain activities, accommodations, and transport
                arrangements, which will be specified at the time of booking.</p></li>
            </ul>
            <br /><br /><h4>Refund Policy</h4>
            <ul>
              <li>
                <p>If you are eligible for a refund, we will process it within 14 days of receiving your cancellation request.
                </p>
              </li>
              <li>
                <p>Refunds will be issued in the same form of payment used to make the booking.</p>
              </li>
              <li>
                <p>Please note that we are not responsible for any fees charged by your bank or financial institution in
                  connection with the refund.</p>
              </li>
              <li>
                <p>If we cancel your travel arrangements due to unforeseen circumstances, we will provide you with a full refund
                  of the amount paid.</p>
              </li>
              <li>
                <p>We reserve the right to cancel any booking at any time and will provide you with a full refund in such cases.
                </p>
              </li>
              <li>
                <p>We strongly recommend that you purchase travel insurance to cover any unforeseen events that may cause you to
                  cancel your travel arrangements.</p>
              </li>
              <li>
                <p>If you have any questions or concerns regarding our cancellation and refund policy, please do not hesitate to
                  contact us.</p>
              </li>
            </ul>
            <br /><br />
            <p>Thank you for choosing <b>Travel Qila</b>.</p>
          </section>
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

export default refund;