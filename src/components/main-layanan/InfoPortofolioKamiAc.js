import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import ggg from '../image-components/gggggg.png'

export default function InfoPortofolioKamiAc() {
    return (
        <>
            <Container className="distance">
                <Row>
                    <Col>
                        <Row className="text-white text-center pt-4 flex-row-reverse justify-content-center align-items-center px-4" style={{ borderRadius: '20px', background: 'linear-gradient(to right, #0FBAE1, #2164E9)' }}>
                            <Col sm={4} className="text-left title-respons">
                                <p>Masih ragu dengan kami yukkk!!! lihat portofolio kami</p>
                                <Button className="hover-getvisx px-3 py-2 border-0">Portofolio Kami Disini</Button>
                            </Col>
                            <Col sm={5} className="d-flex flex-column align-items-center pt-4">
                                <Image src={ggg} width="100%" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
