import React, { useState } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import gambar from '../image-components/design-webs/Rectangle20.png'

export default function DesignWebsites() {
    const [ecommerce, setEcommerce] = useState([1, 2, 3])
    return (
        <>
            <Container className="distance">
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={6}>
                        <h2>Bingung cari <br /> design buat website kamu</h2>
                        <p style={{ fontSize: '21px' }}>Cari dan temukan konsep design yang sesuai dengan brand dan bisnis kamu dengan puluhan template</p>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col xs={12} className="mb-3">
                        <h4>Toko Online</h4>
                    </Col>
                    {ecommerce.length && ecommerce.map((item) => (
                        <Col sm={4} key={item}>
                            <Card className="border-0">
                                <Card.Img src={gambar} width="250px" />
                                <Card.Body className="p-3">
                                    <Card.Text>
                                        <a href="#">Lihat Template</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className="my-4">
                    <Col xs={12} className="mb-3">
                        <h4>Company Profile</h4>
                    </Col>
                    {ecommerce.length && ecommerce.map((item) => (
                        <Col sm={4} key={item}>
                            <Card className="border-0">
                                <Card.Img src={gambar} width="250px" />
                                <Card.Body className="p-3">
                                    <Card.Text>
                                        <a href="#">Lihat Template</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className="my-4">
                    <Col xs={12} className="mb-3">
                        <h4>Blog</h4>
                    </Col>
                    {ecommerce.length && ecommerce.map((item) => (
                        <Col sm={4} key={item}>
                            <Card className="border-0">
                                <Card.Img src={gambar} width="250px" />
                                <Card.Body className="p-3">
                                    <Card.Text>
                                        <a href="#">Lihat Template</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
