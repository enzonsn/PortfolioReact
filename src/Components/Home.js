import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

import {FiInstagram, FiTwitter, FiGithub} from 'react-icons/fi';

function Home(){
    return (
        <section id="home-main-sect">
            <Container fluid className="home-cont">
                <Container className="home-cont2">
                    <Row>
                        <Col md={3}/>
                        <Col md={6} className="home-header" selfalign="center">
                            <h1 className="head-name" style={{padding:20}}>I am Enzo Sperduti.</h1>
                            <h3 className="head-desc" style={{padding:50, textAlign: 'center'}}>
                                A Houston based <strong>Full Stack Web Developer</strong>. Who grew up learning to code and still eager to expand my knowledge.
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </Container>
                
            <Container fluid className="home-cont-about">
                <Container className="home-cont-about-2">
                    <Row>
                        <Col md={12} className="home-bott">
                            <h1>YOU CAN FIND  ME  ON:</h1>
                            <ul className="home-linkers">
                                <li className="home-social-li">
                                    <a href="https://github.com/enzonsn" target="_blank" rel="noopener noreferrer" className="home-social-icon"><FiGithub/></a>
                                </li>
                                <li className="home-social-li">
                                    <a href="https://www.instagram.com/enzonsn/" target="_blank" rel="noopener noreferrer" className="home-social-icon"><FiInstagram/></a>
                                </li>
                                <li className="home-social-li">
                                    <a href="https://twitter.com/enzonsn" target="_blank" rel="noopener noreferrer" className="home-social-icon"><FiTwitter/></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;