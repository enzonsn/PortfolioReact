import React from 'react';
import Work from '../Components/Work';
import { Container, Row, Col } from 'react-bootstrap'

import boozeyimg from '../Assets/boozeyimg.jpg';
import travelBlogimg from '../Assets/travelBloggerimg.jpg';
import weatherDashimg from '../Assets/weatherDashimg.jpg';
import workDayimg from '../Assets/workDayimg.jpg';

export default function WorkPage(){
    return(
        <section id="work-main-cont">
            <Container fluid className="work-cont">
                    <Container className="work-cont2">
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                            <h1 className="work-page-title">Browse what I've worked on!</h1>
                        </Row>
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                            <Col className="work-card">
                                <Work
                                    img={travelBlogimg} title="TravelBlogger"
                                    bio="A blog style site for travelers to interact with others alike."
                                    url="https://github.com/enzonsn/weatherDashboard"
                                />
                            </Col>
                            <Col className="work-card">
                                <Work
                                    img={weatherDashimg} title="weatherDashboard"
                                    bio="Shows you the current weather and weekly forecast of the location you provide."
                                    url="https://github.com/enzonsn/weatherDashboard"
                                />
                            </Col>
                            <Col className="work-card">
                                <Work
                                    img={workDayimg} title="workDayScheduler"
                                    bio="Helps you manage your time and plan out your 9-5 workday."
                                    url="https://github.com/enzonsn/workdayScheduler"
                                />
                            </Col>
                            <Col className="work-card">
                                <Work
                                    img={boozeyimg} title="Boozey"
                                    bio="Helps you decide what you would like to drink, giving you the instructions and ingredients based off your input."
                                    url="https://github.com/enzonsn/weatherDashboard"
                                />
                            </Col>      
                        </Row>
                    </Container>
            </Container>
        </section>
    );
}