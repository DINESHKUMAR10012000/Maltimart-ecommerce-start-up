import React from 'react';
import '../Servies/Servies.css';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import serviesData from '../../src/assets/data/serviceData';

function Servies() {
    return (
        <section className='servies'>
            <Container>
                <Row>
                    {
                        serviesData.map((item, index) => (
                            <Col lg='3' md='4' key={index}>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className='servies__item'>
                                    <span>
                                        <i class={item.icon}></i>
                                    </span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </motion.div>
                            </Col>

                        ))
                    }

                </Row>
            </Container>
        </section>
    )
}

export default Servies
