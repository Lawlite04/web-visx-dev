import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap'
import logovisx from './image-components/Group48.png'

export default function FooterAc() {
    return (
        <>
            <div className="text-white pb-5 px-4" style={{ backgroundColor: '#2A2A2A' }}>
                <Container>
                    <Row>
                        <Col>
                            <Image src={logovisx} width="200px" className="mb-4 mt-5" style={{ objectFit: 'cover' }} />
                            <p style={{ fontSize: '16px' }}>Misi Kami adalah membantu jutaan orang memanfaatkan potensi yang ada di internet untuk membangun kesuksesan online.</p>
                        </Col>
                        <Col sm={2}>
                            <h5 className="mb-3 mt-5">Product</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="border-0 bg-transparent px-0 pb-0">
                                    <a href="#" className="text-white" >
                                        Visx Apps
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 bg-transparent px-0 pb-0">
                                    <a href="#" className="text-white" >
                                        Visx Developer
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 bg-transparent px-0 pb-0">
                                    <a href="#" className="text-white" >
                                        Visx Template
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={2}>
                            <h5 className="mb-3 mt-5">Layanan</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="border-0 bg-transparent px-0 pb-0">
                                    <a href="#" className="text-white">
                                        Web and apps developer
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 bg-transparent px-0 pb-0">
                                    <a href="#" className="text-white">
                                        Service elektronik online
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={2}>
                            <h5 className="mb-3 mt-5">Company</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="border-0 bg-transparent px-0 pb-0">
                                    <a href="#"  className="text-white" >
                                        About
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 bg-transparent px-0 pb-0">
                                    <a href="#"  className="text-white" >
                                        Contact
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={2}>
                            <h5 className="mb-3 mt-5">Follow Us</h5>
                            <div className="d-flex justify-content-around">
                                <span style={{ display: 'block', width: '30px', height: '30px', backgroundColor: '#3E3E3E', borderRadius: '20px' }}></span>
                                <span style={{ display: 'block', width: '30px', height: '30px', backgroundColor: '#3E3E3E', borderRadius: '20px' }}></span>
                                <span style={{ display: 'block', width: '30px', height: '30px', backgroundColor: '#3E3E3E', borderRadius: '20px' }}></span>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div style={{ backgroundColor: '#3E3E3E' }} className="text-white py-4">
                <Container>
                    <Row>
                        <Col className=" footer-responsive">
                            <FontAwesomeIcon icon={faCopyright} /> Copyright 2021 Visx Developer
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
