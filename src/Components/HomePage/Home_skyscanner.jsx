import React from 'react'
import LeadHot from './Components/CentCards/LeadHot'
import Footer from './Components/Footer/Footer'
import FrontBox from './Components/FrontShow/FrontBox'
import Heading from './Components/Header/Heading'
import HotelGrid from './Components/InspirationHotel/HotelGrid'

const HomeSkyPg = () => {
    return (
        <div>
            <Heading />
            <FrontBox />
            <LeadHot />
            <HotelGrid />
            <Footer/>
        </div>
    )
}

export default HomeSkyPg 
