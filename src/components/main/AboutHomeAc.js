import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import aboutImage from '../image-components/AboutMe.png'

export default function AboutHomeAc() {
    return (
        <>
            <Container className="distance">
                <Row>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <Image src={aboutImage} width="80%" />
                    </Col>
                    <Col md={6} className="py-4 d-flex flex-column justify-content-center">
                        <h2 className="mb-3">
                            Mudah dan praktis buat
                            website bisnis pertamamu
                        </h2>
                        <div>
                            <p className="text-respons">
                                kami bantu bisnis anda untuk mempromosikan
                                bisnis, memamerkan karya, membuka toko,
                                atau memulai blog.
                            </p>
                            <Button className="bg-my-blue shadow">Request Sekarang</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
