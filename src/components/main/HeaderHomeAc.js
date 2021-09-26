import React from 'react'
import { Button, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap'
import imgContent from '../image-components/Header.png'

export default function HeaderHomeAc() {
    return (
        <>
            <Jumbotron id="header" className="bg-transparent">
                <Container>
                    <Row className="flex-md-row-reverse align-items-center">
                        <Col md={6}>
                            <Image src={imgContent} width="100%" className="img-header" />
                        </Col>
                        <Col md={6}>
                            <h1 className="mb-3">
                                Tingkatkan <br /> exposure bisnis dan jangkau ribuan orang
                            </h1>
                            <p className="text-respons">
                                Go online bisnis kamu dan dapat ribuan
                                customer dan exposure bisnis mu
                                bersama kami
                            </p>
                            <Button className="bg-my-blue shadow">Tanya-tanya boleh kok</Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    )
}
