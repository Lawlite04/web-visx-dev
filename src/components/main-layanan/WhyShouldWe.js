import React from 'react'
import { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import growth from '../image-components/growth.png'

export default function WhyShouldWe() {
    const [list, setList] = useState([
        {
            id: 1,
            logo: growth,
            text: 'Harga web terjangkau dengan kualitas profesional.'
        },
        {
            id: 2,
            logo: growth,
            text: 'Dipercaya untuk instansi pemerintah dalam mengembangkan aplikasi.'
        },
        {
            id: 3,
            logo: growth,
            text: 'Berpengalaman'
        },
        {
            id: 4,
            logo: growth,
            text: 'Harga web terjangkau dengan kualitas profesional.'
        },
        {
            id: 5,
            logo: growth,
            text: 'Dipercaya untuk instansi pemerintah dalam mengembangkan aplikasi.'
        },
        {
            id: 6,
            logo: growth,
            text: 'Berpengalaman'
        },
    ])
    return (
        <>
            <Container className="text-center distance">
                <div className="w-why-we mx-auto mb-5">
                    <h2>Kenapa Harus Kami</h2>
                    <p style={{ fontSize: '21px' }}>Kami bantu bisnis Anda untuk mempromosikan bisnis, memamerkan karya, membuka toko, atau memulai blog.</p>
                </div>
                <Row>
                    {list.length && list.map((item) => (
                        <Col key={item.id} sm={6} className="d-flex align-items-center justify-content-around mb-5">
                            <div className="w-25">
                                <div className="p-3 shadow mx-auto" style={{ width: '60px', borderRadius: '10px' }}>
                                    <Image src={item.logo} width="100%" />
                                </div>
                            </div>
                            <div style={{ fontSize: '16px' }} className="w-75 text-left">
                                <span>
                                    {item.text}
                                </span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
