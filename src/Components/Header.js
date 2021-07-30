import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {LinkContainer} from "react-router-bootstrap";


function NavBar(){

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    function scrollHandler() {
        if (window.scrollY >= 20) {updateNavbar(true);} 
        else {updateNavbar(false);}
    }
    
    window.addEventListener("scroll", scrollHandler);

    return (
            <Navbar fixed="top" expand="md" expanded={expand} className={navColour ? "sticky" : "navbar"}>
                <Container>
                    <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" onClick={()=>{ updateExpanded(expand ? false : "expanded");}}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center" style={{ flex: 1}} defaultActiveKey="#home">
                            <LinkContainer to="/">
                                <Nav.Link onClick={() => updateExpanded(false)}>Home</Nav.Link>
                            </LinkContainer>a
                            <LinkContainer to="/work">
                                <Nav.Link onClick={() => updateExpanded(false)}>Work</Nav.Link>
                            </LinkContainer>
                            <Nav.Item>
                                <Navbar.Brand className="mx-auto">Enzo Sperduti</Navbar.Brand>
                            </Nav.Item>
                            <LinkContainer to="/resume">
                                <Nav.Link onClick={() => updateExpanded(false)}>Resume</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">    
                                <Nav.Link onClick={() => updateExpanded(false)}>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default NavBar;