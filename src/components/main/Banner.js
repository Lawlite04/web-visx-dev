import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import imgCEO from '../image-components/design-webs/groboxkurir.png'

export default function Banner() {
    return (
        <>
            <Container className="distance">
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center align-items-center" style={{ borderRadius: '20px', background: 'linear-gradient(to right, #0FBAE1, #2164E9)' }}>
                            <Row className="p-4 text-white text-center flex-md-row-reverse justify-content-center align-items-center">
                                <Col sm={4} className="d-flex flex-column align-items-center mb-2">
                                    <Image src={imgCEO} width="200px" />
                                    <span style={{ fontSize: '18px', fontWeight: '500', marginTop: '8px', letterSpacing: '2px' }}>Abdulloh, CEO</span>
                                    <span style={{ fontSize: '14px', fontWight: '400', opacity: '50%', letterSpacing: '2px' }}>VEDC</span>
                                </Col>
                                <Col sm={5} style={{ fontSize: '21px', fontWeight: '400' }}>
                                    <p>Kami bantu bisnis Anda untuk mempromosikan bisnis, memamerkan karya, membuka toko, atau memulai blog.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
