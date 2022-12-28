import React from 'react'
import '../../component/Footer.js/footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className='logo'>
          <span><i class="ri-shopping-cart-line"></i></span>
            <div>
              <h1>MultiMart</h1>
            </div>
            </div>
            <p className='footer__text mt-3'>
                    Modern home design emphasizes clean lines and geometric shapes.
                    No more are features such as arches, ornate columns, window shutters, or any outlandish ornamentation.
                    In place of these features that at one point spoke of luxury and wealth are simple shapes and intentional asymmetry.
            </p>
          </Col>
          <Col lg='3'>
            <div className='fotter__quick-links'>
              <h4 className='footer__links-title'>Top categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0  border-0'>
                  <Link to='#' className='footer__text'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0  border-0'>
                  <Link to='#'  className='footer__text'>Arm Chairs</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0  border-0'>
                  <Link to='#'  className='footer__text'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0  border-0'>
                  <Link to='#'  className='footer__text'>Smart watches </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
          <div className='fotter__quick-links'>
              <h4 className='footer__links-title'>Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0  border-0'>
                  <Link to='/shop'  className='footer__text'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0  border-0'>
                  <Link to='/cart'  className='footer__text'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0  border-0'>
                  <Link to='/login'  className='footer__text'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0  border-0'>
                  <Link to='/'  className='footer__text'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
              </div>
          </Col>
          <Col lg='3'>
          <div className='fotter__quick-links'>
              <h4 className='footer__links-title'>Contact</h4>
              <ListGroup className=' footer__contact mb-3'>
                <ListGroupItem className='ps-0  border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>542, Siva Shakthi Nagar, Peelamedu coimbatore</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0  border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+91 8248005079</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0  border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i></span>
                  <p>dineshkumard3162434@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className='footer__copyrigths'><i class="ri-copyright-line"></i>Copyrigths {year} devloped by Dineshkumar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
