import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import FooterImage from '../assets/images/footer-logo.png';
import '../assets/sass/components/_footer.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFax } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineCopyrightCircle } from 'react-icons/ai';

function Footer() {
  return (
    <footer>
      <Container>
        <Row xs={1} md={3}>
          <Col>
            <div>
              <img
                className="img-fluid"
                src={FooterImage}
                alt="maxxis"
                loading="lazy"
              />
            </div>
            <p>
              At MAXXIS we strive to provide the highest quality products and
              customer service with the goal of creating lifelong Maxxis
              customers. Anchored by a strong commitment to our values, we form
              close partnerships with our stakeholders, and together we work to
              consistently exceed our customers' expectations.
            </p>
            <div className="social-icon d-flex">
              <div className="icon">
                <a
                  style={{ color: 'white' }}
                  href="https://www.facebook.com/MAXXISBangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <ImFacebook />
                </a>
              </div>
              <div className="icon">
                <a
                  style={{ color: 'white' }}
                  href="https://instagram.com/maxxistyres_bangladesh?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </Col>

          <Col>
            <div className="content">
              <h3>Information</h3>
              <ul>
                <li className="mb-2">
                  <Link to="/">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/products">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Products
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/career">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Career
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/news">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    News & Events
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/gallery">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Gallery
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col>
            <h3>Contact Us</h3>

            <div className="d-flex mb-2">
              <div className="icon">
                <MdLocationPin />
              </div>
              <p className="ms-3">
                Shahabuddin Trade Center 1230, D.T. Road, Dhaniala Para,
                Kadamtali, Chattogram-4100, Bangladesh.
              </p>
            </div>

            <div className="d-flex mb-2">
              <div className="icon">
                <MdLocationPin />
              </div>
              <p className="ms-3">
                Navana Rahim Ardent, Suitet#C-2 (2nd Floor) 185, Shahid Syed
                Nazrul Islam Sharani, Bijoynagar,
                Kakrail, Dhaka-1000, Bangladesh.
              </p>
            </div>

            <div className="d-flex mb-2">
              <div className="icon">
                <FiPhoneCall />
              </div>
              <a href="tel:+88 02 222220458" className="ms-3 links">
                +88 02 222220458
              </a>
            </div>

            <div className="d-flex mb-2">
              <div className="icon">
                <AiOutlineMail />
              </div>
              <a href="mailto: info@maxxis.com.bd" className="ms-3 links">
                info@maxxis.com.bd
              </a>
            </div>

            <div className="d-flex mb-2">
              <div className="icon">
                <FaFax />
              </div>
              <a href="tel:+88 02 222220458" className="ms-3 links">
                +88 02 49349936
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bottom">
        <AiOutlineCopyrightCircle />
        Copyright. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
