import React from 'react'

import HotelsDetails from './HotelsDetails';
import MainGuest from './MainGuest';
import Navbar from './Navbar';
import {PaymentMethods} from "./Payment/PaymentMethods"
const MainPaymentPage = () => {
    return (

        <>
        <Navbar/>
        <div style={{display:"flex",justifyContent:"space-around",width:"70%",margin:"auto"}}>
            
            <div style={{width:"50%"}}>
                <MainGuest/>
               
                <PaymentMethods/>
            </div>

             <div style={{width:"50%"}}>
                 <HotelsDetails/>
             </div>
        </div>

        </>
    )
}

export default MainPaymentPage
