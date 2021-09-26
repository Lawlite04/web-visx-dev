import React, { useState } from 'react'
import { Button, Card, Container, Image, ListGroup, Row, Col, Tab, Tabs } from 'react-bootstrap'
import rectangle from '../components/image-components/Rectangle37@2x.png'
import path from '../components/image-components/Path1.png'
import { numberFormat } from '../components/BaseComponent'
import GetStartedVisx from '../components/main/GetStartedVisx'
import InfoPortofolioKamiAc from '../components/main-layanan/InfoPortofolioKamiAc'

export default function DetailPaketLayananAc() {
    const [paketLayanan, setPaketLayanan] = useState([
        {
            id: 1,
            name: 'Company Profile',
            price: 1000000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 2,
            name: 'Simple Toko Online',
            price: 3500000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 3,
            name: 'E-commerce',
            price: 6000000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 4,
            name: 'Company Profile',
            price: 1000000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 5,
            name: 'Simple Toko Online',
            price: 3500000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 6,
            name: 'E-commerce',
            price: 6000000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 7,
            name: 'Company Profile',
            price: 1000000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 8,
            name: 'Simple Toko Online',
            price: 3500000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 9,
            name: 'E-commerce',
            price: 6000000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
    ])
    const [paketAplikasi, setPaketAplikasi] = useState([
        {
            id: 1,
            name: 'Simple Toko Online',
            price: 4500000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 2,
            name: 'E-commerce',
            price: 5000000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 3,
            name: 'Simple Toko Online',
            price: 4500000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 4,
            name: 'E-commerce',
            price: 5000000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 5,
            name: 'Simple Toko Online',
            price: 4500000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
        {
            id: 6,
            name: 'E-commerce',
            price: 5000000,
            list: ['1 Halaman', '3X revisian', 'WhatsApp API', 'Free Maintenance setiap bulan']
        },
    ])
    return (
        <>
            <div className="my-5 py-5 bg-img">
                <Container>
                    <h1 className="text-center">
                        Pilih Paket Layanan Kami
                    </h1>
                    <Tabs defaultActiveKey="paketWebsite" id="uncontrolled-tab-example" className="my-5 border-0 justify-content-between">
                        <Tab eventKey="disbaled1" title="" disabled></Tab>
                        <Tab eventKey="paketWebsite" title="Paket Website">
                            <Container fluid>
                                <Row>
                                    {paketLayanan.length && paketLayanan.map((item) => (
                                        <Col md={6} lg={4} key={item.id} className="mb-4">
                                            <Card className="text-center p-2 shadow border-0 bg-setengah-trans">
                                                <Card.Img variant="top" src={rectangle} />
                                                <Card.Body className="text-left bg-transparent">
                                                    <Card.Text className="text-primary">{item.name}</Card.Text>
                                                    <Card.Title>Rp. {numberFormat(item.price)}</Card.Title>
                                                    <Card.Text className=" bg-transparent">
                                                        <ListGroup className="border-0 m-0 p-0 bg-transparent">
                                                            {item.list.map((a, idx) => (
                                                                <ListGroup.Item className="border-0 mx-0 px-0 bg-transparent" key={idx}>
                                                                    <Image src={path} width="15px" className="mr-2" />
                                                                    {a}
                                                                </ListGroup.Item>
                                                            ))}
                                                        </ListGroup>
                                                    </Card.Text>
                                                    <a href="javascript:;" className="bg-transparent d-block text-center py-2 w-100 border-0 text-primary" style={{ fontSize: 'small' }}>Lihat Lebih Banyak</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="paketAplikasi" title="Paket Aplikasi">
                            <Container fluid>
                                <Row>
                                    {paketAplikasi.length && paketAplikasi.map((item, idx) => (
                                        <Col md={6} lg={4} key={item.id}  className="mb-4">
                                            <Card className="text-center p-2 shadow border-0">
                                                <Card.Img variant="top" src={rectangle} />
                                                <Card.Body className="text-left">
                                                    <Card.Text className="text-primary">{item.name}</Card.Text>
                                                    <Card.Title>Rp. {numberFormat(item.price)}</Card.Title>
                                                    <Card.Text>
                                                        <ListGroup className="border-0 m-0 p-0">
                                                            {item.list.map((a, idx) => (
                                                                <ListGroup.Item className="border-0 mx-0 px-0 py-2" key={idx}>
                                                                    <Image src={path} width="15px" className="mr-2" />
                                                                    {a}
                                                                </ListGroup.Item>
                                                            ))}
                                                        </ListGroup>
                                                    </Card.Text>
                                                    <a href="javascript:;" className="bg-transparent d-block text-center py-2 w-100 border-0 text-primary hover-list" style={{ fontSize: 'small' }}>Lihat Lebih Banyak</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="disabled2" title="" disabled></Tab>
                    </Tabs>
                </Container>
            </div>
            <InfoPortofolioKamiAc/>
            <GetStartedVisx/>
        </>
    )
}
