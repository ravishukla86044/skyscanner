import React from 'react'
import styles from "./Mainpage.module.css"
import HotelsDetails from './HotelsDetails';
import MainGuest from './MainGuest';
import Navbar from './Navbar';
import {PaymentMethods} from "./Payment/PaymentMethods"
const MainPaymentPage = ({formData}) => {
    return (

        <>
        <Navbar/>
        <div  className={styles.mainPayment} >
            
            <div className={styles.mainguest}>
                <MainGuest/>
               
                <PaymentMethods/>

                <p className={styles.footerpayment}>By continuing you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policies</a> and Trip.com <a href="#">Terms and Conditions</a> &<a href="#"> Privacy Policies.</a></p>
            </div>

             <div className={styles.hoteldetails}>
                 <HotelsDetails formData={formData}/>
             </div>
        </div>

        </>
    )
}

export default MainPaymentPage
