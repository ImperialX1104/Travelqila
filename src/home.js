import React from 'react';
import './index.css'
import myimage from './Untitled.png';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { closeOutline } from 'ionicons/icons';
import { chevronUpOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Nav from './nav';

function Home() {
  
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
      <meta name="description" content="Travel Qila" />
      {/* Google tag (gtag.js) */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
      <link href="https://vq.pe/creator/frontend/global/css/main.css?v=1678433361" rel="stylesheet" />
      <header className="header" data-header style={{ maxHeight: 900, maxWidth: 9000 }}>
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
                <a href="https://www.calculator.net/currency-calculator.html" target="_blank" className="navbar-link">Currency
                  Converter</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <article>
          {/* 
  - #HERO
*/}
          <section id="s_1" className="cdis  ">
            <div className="section hero">
              <div className="container">
                <img src="https://vq.pe/creator/frontend/theme_9/images/shape-1.png" width={61} height={61} alt="Vector Shape" className="shape shape-1" />
                <img src="https://vq.pe/creator/frontend/theme_9/images/shape-2.png" width={56} height={74} alt="Vector Shape" className="shape shape-2" />
                <img src="https://vq.pe/creator/frontend/theme_9/images/shape-3.png" width={57} height={72} alt="Vector Shape" className="shape shape-3" />
                <div className="hero-content">
                  <h2 className="hero-title dynamic" id="c_2">Travel Qila</h2>
                  <p className="section-subtitle dynamic" id="c_1">Travel Beyond Boundaries</p>
                  <p className="hero-text dynamic" id="c_3">We believe that travel is not just about the destination, but the
                    journey. Let us be your guide on this incredible journey of discovery.</p>
                  <div className="btn-group">
                  <Link to="/contact-us" className="btn btn-primary dynamic" id="c_4">Contact Us</Link>
                    <a href="#c_44" className="btn btn-outline dynamic" id="c_5">Learn More</a>
                  </div>
                </div>
                <figure className="hero-banner">
                  <img src="https://vq.pe/creator/frontend/theme_9/images/hero-banner.png" width={686} height={812} loading="lazy" alt="hero banner" className="w-100 dynamic" id="c_6" />
                </figure>
              </div>
            </div>
          </section>
          <section id="s_2" className="section destination cdis  ">
            <div className="container">
              <p className="section-subtitle dynamic" id="c_7">Destinations</p>
              <h2 className="h2 section-title dynamic" id="c_8">Choose Your Place</h2>
              <ul className="destination-list">
                <li className="w-50">
                  <div className="destination-card">
                    <a href="http://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=MLE&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" target="_blank" rel="noopener noreferrer"><img src="https://vq.pe/creator/frontend/theme_9/images/destination-1.jpg" width={1140} height={1100} loading="lazy" alt="Malé, Maldives" className="img-cover dynamic" id="c_9" />
                    </a>
                    <div className="card-content">
                      <p className="card-subtitle dynamic" id="c_10">Malé</p>
                      <a href="https://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=MLE&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" className="h3 card-title dynamic" id="c_11" target="_blank">Maldives</a>
                    </div>
                  </div>
                </li>
                <li className="w-50">
                  <span className="destination-card">
                    <figure className="card-banner">
                      <a href="http://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=BKK&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" target="_blank" rel="noopener noreferrer"><img src="https://vq.pe/creator/frontend/theme_9/images/destination-2.jpg" width={1140} height={1100} loading="lazy" alt="Bangkok, Thailand" className="img-cover dynamic" id="c_13" /></a>
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle dynamic" id="c_14">Bangkok</p>
                      <a href="https://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=BKK&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" className="h3 card-title dynamic" id="c_15">Thailand</a>
                    </div>
                  </span>
                </li>
                <li>
                  <span className="destination-card">
                    <figure className="card-banner">
                      <a href="http://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=KUL&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" target="_blank" rel="noopener noreferrer"><img src="https://vq.pe/creator/frontend/theme_9/images/destination-3.jpg" width={1110} height={480} loading="lazy" alt="Kuala Lumpur, Malaysia" className="img-cover dyn amic" id="c_16" /></a>
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle dynamic" id="c_17">Kuala Lumpur</p>
                      <a href="https://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=KUL&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" className="h3 card-title dynamic" id="c_18">Malaysia</a>
                    </div>
                  </span>
                </li>
                <li>
                  <span className="destination-card">
                    <figure className="card-banner">
                      <a href="http://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=KTM&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" className="h3 card-title dynamic" id="c_21" target="_blank" rel="noopener noreferrer"><img src="https://vq.pe/creator/frontend/theme_9/images/destination-4.jpg" width={1110} height={480} loading="lazy" alt="Kathmandu, Nepal" className="img-cover dynamic" id="c_19" /></a>
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle dynamic" id="c_20">Kathmandu</p>
                      <a href="https://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=KTM&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" className="h3 card-title dynamic" id="c_21">Nepal</a>
                    </div>
                  </span>
                </li>
                <li>
                  <span className="destination-card">
                    <figure className="card-banner">
                      <a href="https://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=DPS&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" target="_blank" rel="noopener noreferrer"><img src="https://vq.pe/creator/frontend/theme_9/images/destination-5.jpg" width={1110} height={480} loading="lazy" alt="Jakarta, Indonesia" className="img-cover dynamic" id="c_22" /></a>
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle dynamic" id="c_23">Bali</p>
                      <a href="https://www.destinytours.in/flights/search/?&adultCount=1&childCount=0&infantCount=0&directFlight=false&journeyType=1&origin=DEL&destination=DPS&preferredDepartureTime=2024-01-01T00:00:00&flightCabinClass=1&memberCode=mjimn&organizationCode=orjz3m" className="h3 card-title dynamic" id="c_24">Indonesia</a>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section id="s_3" className="section about cdis  ">
            <div className="container">
              <div className="about-content">
                <p className="section-subtitle dynamic" id="c_25">About Us</p>
                <h2 className="h2 section-title dynamic" id="c_26">Explore all tour of the world with us.</h2>
                <p className="about-text dynamic" id="c_27"> Lorem Ipsum available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <ul className="about-list">
                  <li className="about-item">
                    <div className="about-item-icon">
                      <span style={{ fontSize: 14 }} id="c_36" icon="bi-compass-fill" className="dynamic bi-compass-fill" />
                    </div>
                    <div className="about-item-content">
                      <h3 className="h3 about-item-title dynamic" id="c_28">Visa Assistance</h3>
                      <p className="about-item-text dynamic" id="c_29">We offers a cost-effective and efficient way for people
                        to obtain visas with the added benefits of personalized assistance and other value-added services
                      </p>
                    </div>
                  </li>
                  <li className="about-item">
                    <div className="about-item-icon">
                      <span style={{ fontSize: 14 }} id="c_37" icon="bi-briefcase-fill" className="dynamic bi-briefcase-fill" />
                    </div>
                    <div className="about-item-content">
                      <h3 className="h3 about-item-title dynamic" id="c_30">Friendly price</h3>
                      <p className="about-item-text dynamic" id="c_31">At <b>TravelQila</b>, we provide a range of services,
                        including flight bookings, hotel reservations, tour packages, and travel insurance, all at
                        affordable, cost-effective, and nominal prices.</p>
                    </div>
                  </li>
                  <li className="about-item">
                    <div className="about-item-icon">
                      <span style={{ fontSize: 14 }} id="c_38" icon="bi-umbrella-fill" className="dynamic bi-umbrella-fill" />
                    </div>
                    <div className="about-item-content">
                      <h3 className="h3 about-item-title dynamic" id="c_32">Reliable tour</h3>
                      <p className="about-item-text dynamic" id="c_33">Our main aim personalized travel planning, expert advice
                        on destinations and activities, and access to exclusive deals and discounts</p>
                    </div>
                  </li>
                </ul>
                <a href="https://wa.me/+917827873400" target="_blank" className="btn btn-primary dynamic" id="c_34">Booking
                  Now</a>
              </div>
              <figure className="about-banner">
                <img src="https://vq.pe/creator/frontend/theme_9/images/about-banner.png" width={756} height={842} loading="lazy" alt className="w-100 dynamic" id="c_35" />
              </figure>
            </div>
          </section>
          {/* <section  id="s_4" class="section blog cdis  ">
  <div class="container">

  <p class="section-subtitle dynamic" id="c_39">From The Blog Post</p>

  <h2 class="h2 section-title dynamic" id="c_40">Latest News</h2>
  <div style="text-align:right">
          <a href="/works/" style="margin:20px 0;display: inline-block;" class="btn btn-primary"> View All</a>
      </div>   
    <ul class="blog-list">
     */}
        </article>
      </main>
      {/* 
    - #FOOTER
  */}
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
                <p className="footer-text dynamic" id="c_34"> <b>Contact No:</b><br /> <a href="https://wa.me/+919871101345" style={{ color: 'inherit' }} target="_blank">+91 9871101345</a><br /><b>Email:</b><a href="mailto:rohit@travelqila.com" target="_blank">rohit@travelqila.com</a></p>
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
    </div>
  );
}

export default Home;