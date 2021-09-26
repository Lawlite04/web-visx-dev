import React from 'react'
import { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import growth from '../image-components/growth.png'

export default function VisiMisiAc() {
    const [vm, setVm] = useState([
        {
            id: 1,
            logo: growth,
            text: 'Harga web terjangkau dengan kualitas professional.'
        },
        {
            id: 2,
            logo: growth,
            text: 'Harga web terjangkau dengan kualitas professional.'
        },
        {
            id: 3,
            logo: growth,
            text: 'Harga web terjangkau dengan kualitas professional.'
        },
    ])
    return (
        <>
            <Container className="distance">
                <h1 className="text-center">VISI dan MISI</h1>
                <Row>
                    {vm.length && vm.map((item) => (
                        <Col md={4} key={item.id}>
                            <Card className="border-0 bg-transparent pt-5 text-center">
                                <div className="bg-white p-4 mx-auto shadow" style={{ borderRadius: '20px', width: '80px' }}>
                                    <Card.Img src={item.logo} width="100%" />
                                </div>
                                <Card.Body>
                                    <Card.Text style={{ fontSize: '16px' }}>
                                        {item.text}
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
