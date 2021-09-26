import React from 'react'
import CompanyHeaderAc from '../components/main-company/CompanyHeaderAc'
import ProfileKamiAc from '../components/main-company/ProfileKamiAc'
import TimKamiAc from '../components/main-company/TimKamiAc'
import VisiMisiAc from '../components/main-company/VisiMisiAc'
import InfoPortofolioKamiAc from '../components/main-layanan/InfoPortofolioKamiAc'
import WhyShouldWe from '../components/main-layanan/WhyShouldWe'
import GetStartedVisx from '../components/main/GetStartedVisx'

export default function CompanyAc() {
    return (
        <>
            <CompanyHeaderAc/>
            <TimKamiAc/>
            <VisiMisiAc/>
            <WhyShouldWe/>
            <ProfileKamiAc/>
            <InfoPortofolioKamiAc/>
            <GetStartedVisx/>
        </>
    )
}
