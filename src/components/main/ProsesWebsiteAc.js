import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

export default function ProsesWebsiteAc() {
    return (
        <>
            <Container className="distance text-center">
                <h2>Proses Pengerjaan Website</h2>
                <p style={{ fontSize: '22px', marginBottom: '70px' }}>Step by step pengerjaan project kamu hingga selesai <br /> dan ready untuk digunakan</p>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="flex-md-row-reverse justify-content-end">
                        <Col md={8} xl={9} className="bg-info d-flex justify-content-center align-items-center mx-3" style={{ borderRadius: '20px' }}>
                            <Tab.Content className="p-4">
                                <Tab.Pane eventKey="first">
                                    test 1
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    test 2
                                </Tab.Pane>
                                <Tab.Pane eventKey="three">
                                    test 3
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    test 4
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    test 5
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                    test 6
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        <Col md={3} xl={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item className="shadow my-3" style={{ borderRadius: '1em' }} >
                                    <Nav.Link className="py-2 btn-proccess" style={{ borderRadius: '1em' }} eventKey="first">Mengkonsultasikan kebutuhan</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="shadow my-3" style={{ borderRadius: '1em' }} >
                                    <Nav.Link className="py-2 btn-proccess" style={{ borderRadius: '1em' }} eventKey="second">Proses design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="shadow my-3" style={{ borderRadius: '1em' }} >
                                    <Nav.Link className="py-2 btn-proccess" style={{ borderRadius: '1em' }} eventKey="three">Pengujian prototype design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="shadow my-3" style={{ borderRadius: '1em' }} >
                                    <Nav.Link className="py-2 btn-proccess" style={{ borderRadius: '1em' }} eventKey="four">Proses coding</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="shadow my-3" style={{ borderRadius: '1em' }} >
                                    <Nav.Link className="py-2 btn-proccess" style={{ borderRadius: '1em' }} eventKey="five">Pengujian system</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="shadow my-3" style={{ borderRadius: '1em' }} >
                                    <Nav.Link className="py-2 btn-proccess" style={{ borderRadius: '1em' }} eventKey="six">Proses finishing</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    )
}
