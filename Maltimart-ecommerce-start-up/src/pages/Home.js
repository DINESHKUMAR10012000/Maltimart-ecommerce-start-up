import React, { useState, useEffect } from 'react'
import Helmet from '../component/Helmet.js/Helmet'
import products from '../assets/data/products';
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../src/assets/images/hero-img.png';
import '../style/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Servies from '../Servies/Servies';
import ProductList from '../component/UI/ProductList';
import CounterImg from '../../src/assets/images/counter-timer-img.png'
import Clock from '../component/UI/clock';


function Home() {
  const year = new Date().getFullYear()
  const [trandingproduct, settrandingproduct] = useState([])
  const [bestsalesproduct, setbestsalesproduct] = useState([])
  const [mobileproduct, setMobileproduct] = useState([])
  const [wirelessproduct, setWireleesproduct] = useState([])
  const [popularproduct, setPopularproduct] = useState([])

  useEffect(() => {
    const filtertrandingproducts = products.filter(item => item.category === 'chair');


    const filterbestsalesproducts = products.filter(item => item.category === 'sofa');

    const filterMobileproducts = products.filter(item => item.category === 'mobile');

    const filterWirelessproducts = products.filter(item => item.category === 'wireless');

    const filterPopularproducts = products.filter(item => item.category === 'watch');

    settrandingproduct(filtertrandingproducts);
    setbestsalesproduct(filterbestsalesproducts);
    setMobileproduct( filterMobileproducts);
    setWireleesproduct( filterWirelessproducts );
    setPopularproduct(filterPopularproducts);
    

  }, []);

  return (
    <>
      <Helmet title={'home'}>
        <section className='hero__section'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className='hero_content'>
                  <p className='hero_subtitle'> Tranding Product in {year}</p>
                  <h2> Make Your Interior More Minmalist & Modern</h2>
                  <p>Modern home design emphasizes clean lines and geometric shapes.
                    No more are features such as arches, ornate columns, window shutters, or any outlandish ornamentation.
                    In place of these features that at one point spoke of luxury and wealth are simple shapes and intentional asymmetry.</p>
                  <motion.button whileTap={{ scale: 1.2 }} className='buy__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className='hero__image'>
                  <img src={heroImg} alt='' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Servies />
        <section className='trending__products'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section__title'>Tranding Products</h2>
              </Col>
              <ProductList data={trandingproduct} />
            </Row>
          </Container>
        </section>
        <section className='best__sales'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section__title'>Best Sales</h2>
              </Col>
              <ProductList data={bestsalesproduct} />
            </Row>
          </Container>
        </section>
        <section className='timer' >
          <Container>
            <Row>
              <Col lg='6' md='12'>

                <div className='clock__top-content'>
                  <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                  <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                </div>
                <Clock/>
                <motion.button whileTap={{scale:1.2}} className='buy__btn bg-white '>
                  <Link to='/shop'><span className='text-black'>Vist store</span></Link>
                </motion.button>
              </Col>

              <Col lg='6' md='6' className='text-end'>
                <img src={CounterImg} alt='' />
              </Col>

            </Row>

          </Container>
        </section>
        <section className='new__arrivals mb'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section__title'>New Arrivals</h2>
              </Col>
              <ProductList data={mobileproduct} />
              <ProductList data={wirelessproduct} />
            </Row>
          </Container>
        </section>

        <section className='popular__category mb-5'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section__title'>Popular category</h2>
              </Col>
              <ProductList data={popularproduct} />
              
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Home
