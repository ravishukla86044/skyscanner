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
import LocalCafeRoundedIcon from '@material-ui/icons/LocalCafeRounded';
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import LocalDrinkRoundedIcon from '@material-ui/icons/LocalDrinkRounded';
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import ConfirmationNumberRoundedIcon from '@material-ui/icons/ConfirmationNumberRounded';
import SmokeFreeRoundedIcon from '@material-ui/icons/SmokeFreeRounded';
import LocalLaundryServiceRoundedIcon from '@material-ui/icons/LocalLaundryServiceRounded';
import TableChartRoundedIcon from '@material-ui/icons/TableChartRounded';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import NoteRoundedIcon from '@material-ui/icons/NoteRounded';
import AirlineSeatFlatAngledRoundedIcon from '@material-ui/icons/AirlineSeatFlatAngledRounded';
import AirlineSeatFlatRoundedIcon from '@material-ui/icons/AirlineSeatFlatRounded';
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
              
            <div className="adviser" style={{marginLeft:"10%"}}>
            <div className="SectionHeader_SectionHeader__1YzyH"><h1 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs"><img alt="TripAdvisor" height="47" className="ReviewsFromTA_ReviewsFromTA__image__1-ngD" src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-64600-0.svg"/> reviews</h1></div>
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
                    <div className="PaymentCardPolicy_PaymentCardPolicy__cardLogo__3JaB0"><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/master-card.de882b11.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/visa.62f951bc.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/amex.6be00169.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/diners.90c82454.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/jcb.9dbc7265.svg" alt="card logo"/><img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/discover.51d7c5b8.svg" alt="card logo"/><section></section></div>
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

               <div className="biggeranemities">
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

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Theater Facilities</p>
                    </div>
                    </div>
                    
                   
                </div>
                <hr style={{width:"70%",margin:"auto"}}></hr>
                
                <div className="tamenities2">
                <div>
                   <h3>Food and drink</h3>
                </div>
                       
                    <div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <LocalCafeRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Cafe</p>
                    </div>
                    </div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <LocalBarRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Bar</p>
                    </div>
                    </div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Banqueting service</p>
                    </div>
                    </div> 

                    </div>

                    <div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <LocalDrinkRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Water Bottle</p>
                    </div>
                    </div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <RestaurantRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Restaurent</p>
                    </div>
                    </div>
                        
                        <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <LocalCafeRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Coffe Maker</p>
                    </div>
                    </div> 
                        
                    </div>

                    <div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Breakfast Room</p>
                    </div>
                    </div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Barbecue</p>
                    </div>
                    </div> 

                    </div>
                    
                    
                </div>

                <hr style={{width:"70%",margin:"auto"}}></hr>

                <div className="tamenities2">
                <div>
                   <h3>Outdoor facility</h3>
                </div>
                       
                    <div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Shops</p>
                    </div>
                    </div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ConfirmationNumberRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Ticket Office</p>
                    </div>
                    </div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Wedding Facilities</p>
                    </div>
                    </div> 

                    </div>

                    <div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Smoking Areas</p>
                    </div>
                    </div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <SmokeFreeRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Non Smoking Floor</p>
                    </div>
                    </div>
                        
                        <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Lounge</p>
                    </div>
                    </div> 
                        
                    </div>

                    <div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <SmokeFreeRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Non Smoking</p>
                    </div>
                    </div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <LocalLaundryServiceRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Laundry</p>
                    </div>
                    </div> 

                    </div>
                    
                </div>
                 <hr style={{width:"70%",margin:"auto"}}></hr>
                <div className="tamenities2">
                <div>
                   <h3>In room</h3>
                </div>
                       
                    <div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <TableChartRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Desk</p>
                    </div>
                    </div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Hair Dryer</p>
                    </div>
                    </div>

                   
                    </div>

                    <div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <AcUnitRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Air Condition</p>
                    </div>
                    </div>
                        
                   
                        
                    </div>

                    <div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <BathtubRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Shower</p>
                    </div>
                    </div>
                        
                   

                    </div>
                    
                    
                </div>

                <hr style={{width:"70%",margin:"auto"}}></hr>
                <div className="tamenities2">
                <div>
                   <h3>Leisure</h3>
                </div>
                       
                    <div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <BathtubRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Suana</p>
                    </div>
                    </div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <NoteRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Newspaper</p>
                    </div>
                    </div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Library</p>
                    </div>
                    </div> 

                    </div>

                    <div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <AirlineSeatFlatAngledRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Massage</p>
                    </div>
                    </div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Steam Room</p>
                    </div>
                    </div>
                        
                        <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Salon</p>
                    </div>
                    </div> 
                        
                    </div>

                    <div>

                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Pool Bar</p>
                    </div>
                    </div>
                        
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Night Club</p>
                    </div>
                    </div> 
                    
                    <div style={{display:"flex"}}>
                    <div style={{marginTop:"16px"}}>
                    <AirlineSeatFlatRoundedIcon fontSize="small" />
                    </div>
                    <div style={{marginLeft:"3px"}}>
                    <p>Spa</p>
                    </div>
                    </div>
                    </div>
                    
                    
                </div>
                 
                 

         </div>
           
          
    </div>
    )
}
