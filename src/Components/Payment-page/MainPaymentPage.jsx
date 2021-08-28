import React from 'react'
import styles from "./Mainpage.module.css"
import HotelsDetails from './HotelsDetails';
import MainGuest from './MainGuest';
import Navbar from './Navbar';
import {PaymentMethods} from "./Payment/PaymentMethods"
const MainPaymentPage = () => {
    return (

        <>
        <Navbar/>
        <div  className={styles.mainPayment} >
            
            <div className={styles.mainguest}>
                <MainGuest/>
               
                <PaymentMethods/>
            </div>

             <div className={styles.hoteldetails}>
                 <HotelsDetails/>
             </div>
        </div>

        </>
    )
}

export default MainPaymentPage
