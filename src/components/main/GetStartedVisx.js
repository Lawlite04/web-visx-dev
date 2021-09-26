import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function GetStartedVisx() {
    return (
        <>
            <Container fluid>
                <Row className="text-center align-items-center text-white" style={{ height: '350px', backgroundColor: '#08B8EA' }}>
                    <Col>
                        <h1>Get Started with VisxDeveloper</h1>
                        <Button className="mt-4 border-0 px-4 py-2 hover-getvisx">Explore Lebih Banyak</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
