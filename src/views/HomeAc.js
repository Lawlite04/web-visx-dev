import React from 'react'
import HeaderHomeAc from '../components/main/HeaderHomeAc'
import AboutHomeAc from '../components/main/AboutHomeAc'
import PaketLayananAc from '../components/main/PaketLayananAc'
import OurProjectClientAc from '../components/main/OurProjectClientAc'
import ProsesWebsiteAc from '../components/main/ProsesWebsiteAc'
import DesignWebsites from '../components/main/DesignWebsites'
import GetStartedVisx from '../components/main/GetStartedVisx'
import Banner from '../components/main/Banner'

export default function HomeAc() {
    return (
        <>
            <HeaderHomeAc />
            <AboutHomeAc />
            <PaketLayananAc />
            <OurProjectClientAc/>
            <ProsesWebsiteAc/>
            <DesignWebsites />
            <Banner/>
            <GetStartedVisx/>
        </>
    )
}
