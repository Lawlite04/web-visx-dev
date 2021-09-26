import React from 'react'
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap'
import growth from '../image-components/growth.png'
import darts from '../image-components/darts.png'

export default function CompanyHeaderAc() {
    return (
        <>
            <Jumbotron className="bg-transparent text-center d-flex align-items-center" style={{ height: '600px' }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="p-5" lg={8}>
                            <h1 className="mb-3">
                                Professional and Give The Best
                            </h1>
                            <p style={{ fontSize: '22px' }}>
                                Kami memberikan yang terbaik setiap project Anda
                            </p>
                            <div className="bg-setengah-trans p-2 mx-auto shadow position-absolute" style={{ borderRadius: '10px', width: '50px', top: '0', right: '0' }}>
                                <Image src={growth} width="100%" />
                            </div>
                            <div className="bg-setengah-trans p-2 mx-auto shadow position-absolute" style={{ borderRadius: '10px', width: '50px', bottom: '0', left: '0' }}>
                                <Image src={darts} width="100%" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    )
}
