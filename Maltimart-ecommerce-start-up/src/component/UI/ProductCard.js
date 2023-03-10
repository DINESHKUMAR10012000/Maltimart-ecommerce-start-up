import React from 'react';
import { Col } from 'reactstrap';
import "../../component/UI/Product-card.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function productCard({item}) {
  return (
    <Col lg='3' md='4'>
    <div className='product__item'>
        <div className='product__img'>
        <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt=''/>
        </div>
        <div className='p-2 product__info'>
        <h3 className='product_name' ><Link to='/shop/${item.id}'>{item.productName}</Link></h3>
        <span className='text-center d-inline-block'>{item.category}</span>
        </div>
        <div className='product__card-bottom '>
            <span className='price'>${item.price}</span>
            <motion.span whileTap={{scale:1.1}}><i class="ri-add-line"></i></motion.span>
        </div>
    </div>
    </Col>
  )
}

export default productCard
