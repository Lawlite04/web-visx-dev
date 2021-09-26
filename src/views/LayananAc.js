import React from 'react'
import WhyShouldWe from '../components/main-layanan/WhyShouldWe'
import AboutHome2Ac from '../components/main/AboutHome2'
import AboutHomeAc from '../components/main/AboutHomeAc'
import Banner from '../components/main/Banner'
import GetStartedVisx from '../components/main/GetStartedVisx'
import OurProjectClientAc from '../components/main/OurProjectClientAc'
import ProsesWebsiteAc from '../components/main/ProsesWebsiteAc'
import PaketLayanans from '../components/PaketLayanans'

export default function LayananAc() {
    return (
        <>
            <PaketLayanans/>
            <AboutHomeAc/>
            <AboutHome2Ac/>
            <WhyShouldWe/>
            <OurProjectClientAc/>
            <ProsesWebsiteAc/>
            <Banner/>
            <GetStartedVisx/>
        </>
    )
}
