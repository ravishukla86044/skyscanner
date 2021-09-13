import React from "react";
import "./HotelDescription.css";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import PetsIcon from "@material-ui/icons/Pets";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import SmsFailedIcon from "@material-ui/icons/SmsFailed";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PaymentIcon from "@material-ui/icons/Payment";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalParkingRoundedIcon from "@material-ui/icons/LocalParkingRounded";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import AirportShuttleRoundedIcon from "@material-ui/icons/AirportShuttleRounded";
import PoolRoundedIcon from "@material-ui/icons/PoolRounded";
import FitnessCenterRoundedIcon from "@material-ui/icons/FitnessCenterRounded";
import MeetingRoomRoundedIcon from "@material-ui/icons/MeetingRoomRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import LocalCafeRoundedIcon from "@material-ui/icons/LocalCafeRounded";
import LocalBarRoundedIcon from "@material-ui/icons/LocalBarRounded";
import LocalDrinkRoundedIcon from "@material-ui/icons/LocalDrinkRounded";
import RestaurantRoundedIcon from "@material-ui/icons/RestaurantRounded";
import ConfirmationNumberRoundedIcon from "@material-ui/icons/ConfirmationNumberRounded";
import SmokeFreeRoundedIcon from "@material-ui/icons/SmokeFreeRounded";
import LocalLaundryServiceRoundedIcon from "@material-ui/icons/LocalLaundryServiceRounded";
import TableChartRoundedIcon from "@material-ui/icons/TableChartRounded";
import BathtubRoundedIcon from "@material-ui/icons/BathtubRounded";
import NoteRoundedIcon from "@material-ui/icons/NoteRounded";
import AirlineSeatFlatAngledRoundedIcon from "@material-ui/icons/AirlineSeatFlatAngledRounded";
import AirlineSeatFlatRoundedIcon from "@material-ui/icons/AirlineSeatFlatRounded";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { dataa } from "../CartPage/utils/dataa";
import { useParams } from "react-router-dom";
import styles from "../../Components/CartPage/Item.module.css";
import Footer from "../../Components/HomePage/Components/Footer/Footer";
import Heading from "../../Components/HomePage/Components/Header/Heading";
import { useHistory } from "react-router-dom";
export const HotelDescription = ({ formData }) => {
  const { name } = useParams();
  const history = useHistory();
  //console.log(formData, name);
  const img = formData.current.target.img.slice(0, 6);
  const star = Number(formData.current.target.star);
  const address = formData.current.target.addrs;
  const rating = formData.current.target.rating;
  const clean = formData.current.target.cleanliness;
  const review = formData.current.target.reviews;
  const price = Number(formData.current.target.lowPrice.price);
  //  console.log(price);
  //console.log(star);

  function Star({ n }) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(1);
    }
    return (
      <div className={styles.star}>
        <div>
          {arr.map((item) => (
            <StarRoundedIcon style={{ fontSize: "80px" }} />
          ))}
        </div>
      </div>
    );
  }

  function Dots({ n }) {
    n = Number(n);
    let floor = Math.floor(n);
    let arr = [];
    var i = 0;
    while (i < 5) {
      arr.push(0);
      i++;
    }
    var i = 0;
    while (i < 5) {
      if (i < floor) {
        arr[i] = 1;
      } else if (n > floor) {
        arr[i] = 0.5;
        break;
      }
      i++;
    }
    //arr.shift();
    return (
      <div className={styles.Dot}>
        {arr.map((item) => {
          if (item === 1) {
            return (
              <div className={styles.full}>
                <div></div>
              </div>
            );
          } else if (item > 0) {
            return (
              <div className={styles.half}>
                <div></div>
              </div>
            );
          } else if (item === 0) {
            return (
              <div>
                <div></div>
              </div>
            );
          }
        })}
      </div>
    );
  }

  // console.log(img);
  return (
    <div>
      <Heading />
      <div className="toutterContainer">
        {img.map((item, i) => {
          return (
            <div className={`ttopItem${i + 1}`}>
              {" "}
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>

      <div className="tbelowBanner">
        <div className="SectionHeader_SectionHeader__1YzyH">
          <h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs">
            {name}
          </h3>
        </div>
        <div className="t1">
          <div className="SectionHeader_SectionHeader__1YzyH">
            <h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs">
              <Star n={star} />
            </h3>
          </div>
        </div>
      </div>

      <div className="thotelAdress">
        <p className="t2">{address}</p>
      </div>

      <div className="tbelowAdress">
        <div>
          <div className="t3">
            <p className="t32">{rating}</p>
          </div>
        </div>
        <div>
          <div className="t4">
            <Dots n={rating} />
            <p className="t5">Based on {review} reviews</p>
          </div>
        </div>

        <div className="t6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#5a489b"
              viewBox="0 0 24 24"
              width="1.25rem"
              height="1.125rem"
              class="ConfidentMessage_ConfidentMessage__itemClean--icon__3264E"
            >
              <path d="M6.176 4.83a.69.69 0 0 1 .92-.251l6.861 3.69a1.502 1.502 0 0 1 .712.846l2.624 7.864a1.5 1.5 0 0 0 2.846-.948l-2.624-7.862a4.497 4.497 0 0 0-2.135-2.537l-6.862-3.69a3.687 3.687 0 0 0-3.652 6.403q.067.04.135.078l6.247 3.404a1.499 1.499 0 1 0 1.437-2.631L6.437 5.792a.69.69 0 0 1-.275-.936l.013-.024zm11.04 14.672a1.5 1.5 0 1 0-.134 2.997q.067.003.134 0h4.5a1.5 1.5 0 0 0 .135-2.997q-.067-.003-.135 0zm-10.5 0a3 3 0 1 1-3-2.997 2.999 2.999 0 0 1 3 2.997z"></path>
              <path d="M2.898 12.009c-1.205 0-2.182 1.449-2.182 2.68v.46a.547.547 0 0 0 .816.425 4.498 4.498 0 0 1 6.121 6.108.547.547 0 0 0 .424.817h3.957a2.207 2.207 0 0 0 2.182-2.231v-1.116c0-3.696-2.93-7.142-6.545-7.142H2.898z"></path>
            </svg>
          </div>
          <div>
            <p className="t7">Cleanliness {clean}/5</p>
          </div>
        </div>
      </div>
      <div className="outterTpay t8">
        <hr></hr>
        <div className="tpay t9">
          <div className="t9">
            <h5>Deals</h5>
            <h5 className="t9">Reviews</h5>
            <h5 className="t10">Location</h5>
            <h5 className="t10">Details</h5>
            <h5 className="t10">Anmeties</h5>
          </div>

          <div className="tprice t11">
            <div>
              <h1>₹ {price}</h1>
            </div>
            <div className="t12">
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={() => {
                  history.push(`/payment/${name}`);
                }}
                className="MainPrice_MainPrice__button__MY5pC BpkButtonBase_bpk-button__3aBJ2 t13"
              >
                <ArrowDownwardIcon className="t14" />
              </Button>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>

      <div className="adviser t15">
        <div className="SectionHeader_SectionHeader__1YzyH">
          <h1 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs">
            <img
              alt="TripAdvisor"
              height="47"
              className="ReviewsFromTA_ReviewsFromTA__image__1-ngD"
              src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-64600-0.svg"
            />{" "}
            reviews
          </h1>
        </div>
      </div>

      <div className="belowAdviser">
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/commercial-and-business-set-2/512/3076_man_c-512.png"
            alt=""
            className="t16"
          />
        </div>

        <div>
          <h4>Buisiness Travellar</h4>
          <p className="t17">Comment: 9 Apr 2020</p>
          <p className="t17">Stayed in: Feb 2020</p>
        </div>

        <div>
          <div className="t9">
            <h4>5.0/</h4>
            <h5>5</h5>
            <img
              src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-64600-5.svg"
              className="t18"
              alt=""
            />
          </div>

          <h3>Amazing visit, 5 star experience</h3>
          <p>
            Had an amazing visit for a week with a colleague. The staff was really good, being
            greeted by Ranjana & Mohini in the morning really put a smile on our face. And they did
            their best to make us comfortable. Pramod was also a really nice guy, did his best to
            make us comfortable. We also received a cake when we last had a dinner at the restaurant
            before we left to the airport. I did have some trouble with the room. Had problems with
            the toilet in 2 different rooms. They did try their best at resolving this.
          </p>
          <div className="t9">
            <div className="t19">
              <ThumbUpAltRoundedIcon fontSize="small" />
            </div>
            <div className="t20">
              <p>Helpfull</p>
            </div>
          </div>
        </div>
      </div>

      <div className="belowAdviser">
        <div>
          <img src="https://static.thenounproject.com/png/851649-200.png" alt="" className="t21" />
        </div>

        <div>
          <h4>Family Travellar</h4>
          <p className="t22">Comment: 9 Apr 2020</p>
          <p className="t22">Stayed in: Feb 2020</p>
        </div>

        <div>
          <div className="t9">
            <h4>5.0/</h4>
            <h5>5</h5>
            <img
              src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-64600-5.svg"
              className="t20"
              alt=""
            />
          </div>

          <h3>Melange - Great food with great staff</h3>
          <p>
            Had an amazing visit for a week with a colleague. The staff was really good, being
            greeted by Ranjana & Mohini in the morning really put a smile on our face. And they did
            their best to make us comfortable. Pramod was also a really nice guy, did his best to
            make us comfortable. We also received a cake when we last had a dinner at the restaurant
            before we left to the airport. I did have some trouble with the room. Had problems with
            the toilet in 2 different rooms. They did try their best at resolving this.
          </p>
          <div className="t9">
            <div className="t19">
              <ThumbUpAltRoundedIcon fontSize="small" />
            </div>
            <div className="t20">
              <p>Helpfull</p>
            </div>
          </div>
        </div>
      </div>

      <div className="belowAdviser">
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/gulu-vacation/100/travelling_convert-512.png"
            alt=""
            className="t21"
          />
        </div>

        <div>
          <h4>Anonymous traveller</h4>
          <p className="t17">Comment: 9 Apr 2020</p>
          <p className="t17">Stayed in: Feb 2020</p>
        </div>

        <div>
          <div className="t9">
            <h4>5.0/</h4>
            <h5>5</h5>
            <img
              src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-64600-5.svg"
              className="t18"
              alt=""
            />
          </div>

          <h3>Amazing Event Experience</h3>
          <p>
            Had an amazing experience with my daughter's engagement party. The variety of food and
            quality was really good. Hotel staff was very friendly and they took care of our guests
            very nicely. They really made them feel very comfortable. Purushotham was very helpful
            and he really took care of our guests very well. A special Thanks to Chef who cooked the
            delicious food for our guests. Thank you so very much for making our event so memorable.
          </p>
          <div className="t9">
            <div className="t19">
              <ThumbUpAltRoundedIcon fontSize="small" />
            </div>
            <div className="t20">
              <p>Helpfull</p>
            </div>
          </div>
        </div>
      </div>

      <div className="belowAdviser">
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/leisure-entertainment-minimalist-icon-set/100/travel-globe-01-512.png"
            alt=""
            className="t16"
          />
        </div>

        <div>
          <h4>Anonymous traveller</h4>
          <p className="t17">Comment: 9 Apr 2020</p>
          <p className="t17">Stayed in: Feb 2020</p>
        </div>

        <div>
          <div className="t9">
            <h4>5.0/</h4>
            <h5>5</h5>
            <img
              src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-64600-5.svg"
              className="t18"
              alt=""
            />
          </div>

          <h3>Fabulous stay</h3>
          <p>
            Spent Christmas Eve, Christmas & Boxing Day 2020 here with my family. We had a fantastic
            stay with wonderful food and excellent service. The staff was extremely accommodating
            and did everything to make your stay enjoyable. Special mention to Mr. Raju (front desk)
            and all the Melange restaurant employees (for example, Mr. Promod). Thanks for making
            our Christmas 2020 memorable, Radisson Blu!
          </p>
          <div className="t9">
            <div className="t19">
              <ThumbUpAltRoundedIcon fontSize="small" />
            </div>
            <div className="t20">
              <p>Helpfull</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tcheckIn1">
        <div className="SectionHeader_SectionHeader__1YzyH">
          <h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs">
            Check in and check out
          </h3>
        </div>
      </div>
      <div className="tcheckIn2">
        <div>
          <QueryBuilderIcon fontSize="large" className="t23" />
        </div>
        <div aria-label="Check in from: 12:00">
          <p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xl__5FNve CheckInCheckOut_CheckInCheckOut__text__xuhbC">
            Check in from:
          </p>
          <p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xl__5FNve CheckInCheckOut_CheckInCheckOut__time__1Nukj">
            12:00
          </p>
        </div>
        <div aria-label="Check out before: 12:00">
          <p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xl__5FNve CheckInCheckOut_CheckInCheckOut__text__xuhbC">
            Check out before:
          </p>
          <p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xl__5FNve CheckInCheckOut_CheckInCheckOut__time__1Nukj">
            12:00
          </p>
        </div>
      </div>

      <div className="tgood">
        <div className="SectionHeader_SectionHeader__1YzyH">
          <h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs">
            Good to know
          </h3>
        </div>
      </div>

      <div className="tbelowgood">
        <div className="tbelowgood1">
          <AccessibilityNewIcon className="t24" />
          <div>
            <h3>Children</h3>
          </div>
          <div>
            <p>Children are welcome at this hotel.</p>
          </div>
        </div>
        <hr></hr>

        <div className="tbelowgood1">
          <PetsIcon className="t24" />
          <div>
            <h3>Pets</h3>
          </div>
          <div>
            <p>Pets are not allowed.</p>
          </div>
        </div>
        <hr></hr>

        <div className="tbelowgood1">
          <LocalDiningIcon className="t24" />
          <div>
            <h3>Breakfast</h3>
          </div>
          <div>
            <p>Breakfast available.</p>
          </div>
        </div>
        <hr></hr>

        <div className="tbelowgood1 tbelowgood4">
          <SmsFailedIcon className="t24" />
          <div>
            <h3>Important information from the hotel</h3>
          </div>
          <div>
            <p>
              Guests are required to show a photo identification and credit card upon check-in.
              Please note that all Special Requests are subject to availability and additional
              charges may apply.
            </p>
          </div>
        </div>
        <hr></hr>

        <div className="tbelowgood1 tbelowgood5">
          <LocationCityIcon className="t24" />
          <div>
            <h3>Important information about the city</h3>
          </div>
          <div>
            <p>
              Effective from Oct 1, 2019, an additional tax will be charged per night according to
              the following standard: not applicable to room rates of INR 1,000 and under; 12% for
              room rates from INR 1,001 to 7,499; 18% for room rates of INR 7,500 and above.
            </p>
          </div>
        </div>

        <hr></hr>

        <div className="tbelowgood1">
          <PaymentIcon className="t24" />
          <div>
            <h3>Accepted payment methods</h3>
          </div>
          <div className="tcardstypes">
            <div className="PaymentCardPolicy_PaymentCardPolicy__cardLogo__3JaB0">
              <img
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/master-card.de882b11.svg"
                alt="card logo"
              />
              <img
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/visa.62f951bc.svg"
                alt="card logo"
              />
              <img
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/amex.6be00169.svg"
                alt="card logo"
              />
              <img
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/diners.90c82454.svg"
                alt="card logo"
              />
              <img
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/jcb.9dbc7265.svg"
                alt="card logo"
              />
              <img
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/discover.51d7c5b8.svg"
                alt="card logo"
              />
              <section></section>
            </div>
          </div>
        </div>
      </div>

      <div className="thoteldescription">
        <div className="SectionHeader_SectionHeader__1YzyH">
          <h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs">
            Hotel Description
          </h3>
        </div>
        <div className="toutterContainer t25">
          {img.map((item, i) => {
            return (
              <div className={`ttopItem${i + 1}`}>
                {" "}
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="t26">
        <p className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxl__1Sso6 HotelDescription_HotelDescription__hotelName__3oGPv ">
          Radisson Blu Bengaluru Outer Ring Road
        </p>

        <p className="DescriptionContent_DescriptionContent__text__G8qNF">
          Inspired by the urban art of living, the Radisson Blu Bengaluru Outer Ring Road offers
          elegant décor and a range of top-notch amenities in the Marathahalli outer ring road area.
        </p>
      </div>

      <div className="tamenities">
        <div className="SectionHeader_SectionHeader__1YzyH">
          <h3 className="BpkText_bpk-text__1KRVP BpkText_bpk-text--xxxl__1QpyP SectionHeader_SectionHeader__title__2lkEs t27">
            Amenities
          </h3>
        </div>
      </div>

      <div className="tamenities1">
        <div>
          <WifiIcon fontSize="medium" className="t28" />
          <p>Wi-Fi</p>
        </div>

        <div>
          <LocalParkingRoundedIcon fontSize="medium" className="t28" />
          <p>Parking</p>
        </div>

        <div>
          <AcUnitRoundedIcon fontSize="medium" className="t28" />
          <p>Air Conditioning</p>
        </div>

        <div>
          <AirportShuttleRoundedIcon fontSize="medium" className="t28" />
          <p>Airport Shuttle</p>
        </div>

        <div>
          <PoolRoundedIcon fontSize="medium" className="t28" />
          <p>Pool</p>
        </div>

        <div>
          <FitnessCenterRoundedIcon fontSize="medium" className="t28" />
          <p>Fitness Center</p>
        </div>
      </div>

      <div className="biggeranemities">
        <div className="tamenities2">
          <div>
            <h3>Buisiness Facilities</h3>
          </div>

          <div className="t9">
            <div className="t19">
              <MeetingRoomRoundedIcon fontSize="small" />
            </div>
            <div className="t29">
              <p>Meeting Room</p>
            </div>
          </div>

          <div className="t9">
            <div className="t19">
              <ArrowForwardRoundedIcon fontSize="small" />
            </div>
            <div className="t29">
              <p>Meeting Facilities</p>
            </div>
          </div>

          <div className="t9">
            <div className="t19">
              <ArrowForwardRoundedIcon fontSize="small" />
            </div>
            <div className="t29">
              <p>Theater Facilities</p>
            </div>
          </div>
        </div>
        <hr className="t30"></hr>

        <div className="tamenities2">
          <div>
            <h3>Food and drink</h3>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <LocalCafeRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Cafe</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <LocalBarRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Bar</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Banqueting service</p>
              </div>
            </div>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <LocalDrinkRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Water Bottle</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <RestaurantRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Restaurent</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <LocalCafeRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Coffe Maker</p>
              </div>
            </div>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Breakfast Room</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Barbecue</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="t31"></hr>

        <div className="tamenities2">
          <div>
            <h3>Outdoor facility</h3>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Shops</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ConfirmationNumberRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Ticket Office</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Wedding Facilities</p>
              </div>
            </div>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Smoking Areas</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <SmokeFreeRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Non Smoking Floor</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Lounge</p>
              </div>
            </div>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <SmokeFreeRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Non Smoking</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <LocalLaundryServiceRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Laundry</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="t31"></hr>
        <div className="tamenities2">
          <div>
            <h3>In room</h3>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <TableChartRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Desk</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Hair Dryer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <AcUnitRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Air Condition</p>
              </div>
            </div>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <BathtubRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Shower</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="t31"></hr>
        <div className="tamenities2">
          <div>
            <h3>Leisure</h3>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <BathtubRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Suana</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <NoteRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Newspaper</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Library</p>
              </div>
            </div>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <AirlineSeatFlatAngledRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Massage</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Steam Room</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Salon</p>
              </div>
            </div>
          </div>

          <div>
            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Pool Bar</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <ArrowForwardRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Night Club</p>
              </div>
            </div>

            <div className="t9">
              <div className="t19">
                <AirlineSeatFlatRoundedIcon fontSize="small" />
              </div>
              <div className="t29">
                <p>Spa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
