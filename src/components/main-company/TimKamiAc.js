import React from 'react'
import { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import profile from '../image-components/design-webs/groboxkurir.png'

export default function TimKamiAc() {
    const [teams, setTeams] = useState([
        {
            id: 1,
            profil: profile,
            nama: 'Abdullah',
            jabatan: 'CEO',
            email: 'startedindonesia@gmail.com'
        },
        {
            id: 2,
            profil: profile,
            nama: 'Danang',
            jabatan: 'Product',
            email: 'startedindonesia@gmail.com'
        },
        {
            id: 3,
            profil: profile,
            nama: 'Tajuddin',
            jabatan: 'Developer',
            email: 'startedindonesia@gmail.com'
        },
    ])
    return (
        <>
            <div className="distance bg-img">
                <Container>
                    <div className="w-why-we text-center mx-auto">
                        <h2>We Make The Best</h2>
                        <p style={{ fontSize: '21px' }}>Kami bantu bisnis Anda untuk mempromosikan bisnis, memamerkan karya, membuka toko, atau memulai blog</p>
                    </div>
                    <Row className="pt-5 justify-content-center">
                        {teams.length && teams.map((item) => (
                            <Col md={6} lg={4} key={item.id} className="mb-4">
                                <Card className="border-0 text-center shadow py-4 bg-setengah-trans" style={{ borderRadius: '20px' }}>
                                    <Card.Img src={item.profil} className="w-75 mx-auto rounded-circle" />
                                    <Card.Body>
                                        <Card.Title>{item.nama}, {item.jabatan}</Card.Title>
                                        <Card.Text className="text-secondary">{item.email}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}
