import React from 'react'
import "./HotelDescription.css";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import PetsIcon from '@material-ui/icons/Pets';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PaymentIcon from '@material-ui/icons/Payment';
import WifiIcon from '@material-ui/icons/Wifi';
import LocalParkingRoundedIcon from '@material-ui/icons/LocalParkingRounded';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import AirportShuttleRoundedIcon from '@material-ui/icons/AirportShuttleRounded';
import PoolRoundedIcon from '@material-ui/icons/PoolRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { dataa } from "../CartPage/utils/dataa";
export const HotelDescription = () => {
    
      
    
   const img = ["https://d2xf5gjipzd8cd.cloudfront.net/available/464507279/464507279_960x576.jpg", "https://d2xf5gjipzd8cd.cloudfront.net/available/443227701/443227701_960x576.jpg", "https://d2xf5gjipzd8cd.cloudfront.net/available/619143134/619143134_960x576.jpg", "https://d2xf5gjipzd8cd.cloudfront.net/available/351852349/351852349_960x576.jpg", "https://d2xf5gjipzd8cd.cloudfront.net/available/464507279/464507279_960x576.jpg", "https://d2xf5gjipzd8cd.cloudfront.net/available/443227700/443227700_960x576.jpg"]
    
       
    
    return (
        <div>
            <div className="toutterContainer">
                {img.map((item, i) => {
                    return <div className={`ttopItem${i+1}`} > <img src={item} alt=""/></div>
                })}
            </div>
            <div className="tcheckIn1">
            <div className="SectionHeader_SectionHeader__1YzyH"><h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs">Check in and check out</h3></div>
            </div>
            <div className="tcheckIn2">
                <div>
                    <QueryBuilderIcon style={{fontSize:"80px"}}/>
                </div>
                <div aria-label="Check in from: 12:00"><p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xl__5FNve CheckInCheckOut_CheckInCheckOut__text__xuhbC">Check in from:</p><p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xl__5FNve CheckInCheckOut_CheckInCheckOut__time__1Nukj">12:00</p></div>
                <div aria-label="Check out before: 12:00"><p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xl__5FNve CheckInCheckOut_CheckInCheckOut__text__xuhbC">Check out before:</p><p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xl__5FNve CheckInCheckOut_CheckInCheckOut__time__1Nukj">12:00</p></div>
               
            </div>
         
            <div className="tgood">
                <div className="SectionHeader_SectionHeader__1YzyH"><h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs">Good to know</h3></div>
            </div>

            <div className="tbelowgood">
                <div className="tbelowgood1">
                <AccessibilityNewIcon style={{ fontSize: "45px",padding:"20px" }} />
                    <div>
                    <h3>Children</h3>
                    </div>
                    <div>
                    <p>Children are welcome at this hotel.</p>
                    </div>
                </div>
                <hr></hr>

                <div className="tbelowgood1">
                    <PetsIcon style={{ fontSize: "45px" ,padding:"20px"}} />
                    <div>
                    <h3>Pets</h3>
                    </div>
                    <div>
                    <p>Pets are not allowed.</p>
                    </div>
                </div>
                <hr></hr>
                
                <div className="tbelowgood1">
                    
                    <LocalDiningIcon style={{ fontSize: "45",padding:"20px"}} />
                    <div>
                    <h3>Breakfast</h3>
                    </div> 
                    <div> 
                    <p>Breakfast available.</p>
                    </div>
                </div>
                <hr></hr>
                
                <div className="tbelowgood1 tbelowgood4">
                    <SmsFailedIcon style={{ fontSize: "45px" ,padding:"20px"}} />
                    <div>
                    <h3>Important information from the hotel</h3>
                    </div>
                    <div>
                    <p>Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply.</p>
                    </div>
                   
                </div>
                <hr></hr>
                
                <div className="tbelowgood1 tbelowgood5">
                    <LocationCityIcon style={{ fontSize: "45px",padding:"20px" }} />
                    <div>
                    <h3>Important information about the city</h3>
                    </div>
                    <div>
                    <p>Effective from Oct 1, 2019, an additional tax will be charged per night according to the following standard: not applicable to room rates of INR 1,000 and under; 12% for room rates from INR 1,001 to 7,499; 18% for room rates of INR 7,500 and above.</p>
                    </div>
                </div>

                <hr></hr>

                <div className="tbelowgood1">
                    <PaymentIcon style={{ fontSize: "45px" ,padding:"20px"}}/>
                    <div>
                    <h3>Accepted payment methods</h3>
                    </div>
                    <div  className="tcardstypes"  >
                    <div class="PaymentCardPolicy_PaymentCardPolicy__cardLogo__3JaB0"><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/master-card.de882b11.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/visa.62f951bc.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/amex.6be00169.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/diners.90c82454.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/jcb.9dbc7265.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/discover.51d7c5b8.svg" alt="card logo"/><section></section></div>
                    </div>
                </div>
                
            </div>

            <div className="thoteldescription">
            <div className="SectionHeader_SectionHeader__1YzyH"><h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs">Hotel Description</h3></div>
            <div className="toutterContainer" style={{ gridTemplateRows:"30px 30px 30px 30px 30px 30px 30px 30px",width:"80%",margin:"auto"}}>
                {img.map((item, i) => {
                    return <div className={`ttopItem${i+1}`} > <img src={item} alt=""/></div>
                })}
            </div>
            </div>

            <div style={{width:"80%",textAlign:"left",margin:"auto",marginBottom:"150px"}}>
                <p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxl__1Sso6 HotelDescription_HotelDescription__hotelName__3oGPv ">Radisson Blu Bengaluru Outer Ring Road</p>
                 
                
                <p className="DescriptionContent_DescriptionContent__text__G8qNF">Inspired by the urban art of living, the Radisson Blu Bengaluru Outer Ring Road offers elegant décor and a range of top-notch amenities in the Marathahalli outer ring road area.</p>
            </div>

            <div className="tamenities">
            <div className="SectionHeader_SectionHeader__1YzyH"><h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs" style={{marginLeft:"10%",marginTop:"50px",marginBottom:"100px"}}>Amenities</h3></div>
            </div>

            <div className="tamenities1">
                <div>
                    <WifiIcon fontSize="medium" style={{padding:"30px"}} />
                   <p>Wi-Fi</p> 
                </div>
                
                <div>
                    <LocalParkingRoundedIcon fontSize="medium" style={{padding:"30px"}}/>
                   <p>Parking</p> 
                </div>
                
                <div>
                    <AcUnitRoundedIcon fontSize="medium" style={{padding:"30px"}}/>
                    <p>Air Conditioning</p>
                </div>

                <div>
                    <AirportShuttleRoundedIcon fontSize="medium" style={{padding:"30px"}}/>
                    <p>Airport Shuttle</p>
                </div>

                <div>
                    <PoolRoundedIcon fontSize="medium" style={{padding:"30px"}}/>
                    <p>Pool</p>
                </div>

                <div>
                    <FitnessCenterRoundedIcon fontSize="medium" style={{padding:"30px"}}/>
                    <p>Fitness Center</p>
                </div>
            </div>

            <div className="tamenities2">
                <div>
                   <h3>Buisiness Facilities</h3>
                </div>
                 
                <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <MeetingRoomRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Meeting Room</p>
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Meeting Facilities</p>
                    </div>
                </div>
                   
                <div>
                    
                </div>
            </div>
          
    </div>
    )
}
