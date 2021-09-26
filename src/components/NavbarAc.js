import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Image, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoVisx from './image-components/Group-2351@2x.png'

export default function NavbarAc() {
    return (
        <Navbar id="navbar" expand="md" className="shadow fixed-top bg-white">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={logoVisx} width="150px" />
                </Navbar.Brand>

                {/* <nav className="bg-danger ml-auto"> */}
                    <FontAwesomeIcon icon={faUser} className="mr-4 nav-responsive" />
                    <div style={{ position: 'relative' }} className="nav-responsive">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="d-inline-block rounded-circle shopping-cart-notif"></span>
                    </div>
                {/* </nav> */}

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="margin-auto font-weight-bold justify-content-between w-50 navbar-nav">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {/* <Nav.Link as={Link} to="/layanan">Template</Nav.Link> */}
                        <Nav.Link as={Link} to="/layanan">Layanan</Nav.Link>
                        <Nav.Link as={Link} to="/company">Company</Nav.Link>
                    </Nav>
                    <Nav className="navbar-nav ml-auto font-weight-bold justify-content-around">
                        <Nav.Link className="mx-2" href="#home">
                            <FontAwesomeIcon icon={faUser} />
                        </Nav.Link>
                        <Nav.Link className="mx-2" href="#link">
                            <div style={{ position: 'relative' }}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="d-inline-block rounded-circle shopping-cart-notif"></span>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
