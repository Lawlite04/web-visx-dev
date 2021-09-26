import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import umImage from '../image-components/project-client/um.png'
import smkn1Image from '../image-components/project-client/smkn1pas.png'
import pemerintahKotaImage from '../image-components/project-client/pemerintah-kota.png'
import vedcImage from '../image-components/project-client/vedc.png'
import agmImage from '../image-components/project-client/agm.png'
import klinikMataImage from '../image-components/project-client/klinik-mata.png'
import hoodwoodImage from '../image-components/project-client/hoodwood.png'
import nasboxImage from '../image-components/project-client/nasbox.png'
import magnaPerkasaImage from '../image-components/project-client/magna-perkasa.png'
import padiImage from '../image-components/project-client/padi.png'
import florenceImage from '../image-components/project-client/florence.png'

export default function OurProjectClientAc() {
    const [linksImg, setLinksImg] = useState([
        {
            UrlPicture: umImage
        },
        {
            UrlPicture: smkn1Image
        },
        {
            UrlPicture: pemerintahKotaImage
        },
        {
            UrlPicture: vedcImage
        },
        {
            UrlPicture: agmImage
        },
        {
            UrlPicture: klinikMataImage
        },
        {
            UrlPicture: hoodwoodImage
        },
        {
            UrlPicture: nasboxImage
        },
        {
            UrlPicture: magnaPerkasaImage
        },
        {
            UrlPicture: padiImage
        },
        {
            UrlPicture: florenceImage
        },
    ])
    return (
        <>
            <div style={{ backgroundColor: '#F5F5F5' }} className="text-center distance">
                <Container>
                    <h2 style={{ marginBottom: '40px', }}>Our Project And Client</h2>
                    <Row className="justify-content-center">
                        {linksImg.length && linksImg.map((link, idx) => (
                            <Col md={3} xl={2} className="my-4 d-flex justify-content-center align-items-center" key={idx}>
                                <Image src={link.UrlPicture} width="80%" />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}
