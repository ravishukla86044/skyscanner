import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const HotelsDetails = () => {
  const [hotelsData, setHotelData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/data").then((res) => {
      setHotelData(res.data);
    });
  }, []);

  const HotelsDes = styled.div`
    width: 515.6px;
    height: auto;
    background-color: #f1f2f8;
    padding: 40px 40px 40px 40px;
    hr {
      width: 100%;
      height: 0.1px;
      opacity:0.4;
      background-color:#a9a9b6;
    }
  `;
  const MainDes = styled.div`
    width: 450px;
    height: 950px;
    background-color: #ffffff;
    margin: auto;

    padding: 20px 25px 25px 25px;
    border-radius: 6px;
  `;
  const Topdes = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Undertop = styled.div`
    display: flex;
    gap: 5px;
    p {
      margin-top: -3px;
    }
  `;
  const Abouthotel = styled.div`
    div {
      display: flex;
      gap: 5px;
      p {
        margin-top: -3px;
      }
    }
    h2 {
      margin-bottom: 0px;
    }
  `;

  const Dates = styled.div`
    margin: 20px 0px 20px 0px;
    div {
      height: 80px;
      width: 340px;
    }
  `;
  const Checkin = styled.div`
    display: flex;
    gap: 30%;
  `;

  const Hotelimages = styled.div`
    margin: 20px 0px 20px 0px;
  `;

  const RoomsDes = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px 0px 20px 0px;
    div {
      height: 50px;
      width: 200px;
      display: flex;
      gap: 10px;

      p {
        margin-top: -2px;
      }
    }
  `;
  const ChangeRoom = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Mainhotelimage = styled.div`
    img {
      border-radius: 10px;
      height: 160px;
      cursor: pointer;
    }
  `;

  const Pricedes = styled.div`
    width: 450px;
    height: 300px;
    background-color: #ffffff;
    margin: auto;
    margin-top: 30px;
    border-radius: 6px;
    padding: 25px 25px 25px 25px;

    div {
      display: flex;
      justify-content: space-between;
    }
    hr {
      width: 100%;
      height: 0.1px;
      opacity:0.4;
      background-color:#a9a9b6;
    }
  `;
  const Others = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f8f8fb;
    border-radius: 6px;
    padding: 0px 20px 0px 20px;
  `;

  const Refund = styled.div`
    width: 450px;
    height: 220px;
    background-color: #ffffff;
    margin: auto;
    margin-top: 30px;
    padding: 25px 25px 25px 25px;
    border-radius: 6px;
    div {
      display: flex;
      gap: 5px;
    }

    h2 {
      margin-top: 0px;
    }
  `;

  return (
    <>
   
      {hotelsData.map((item) => {
        return (
          <HotelsDes key={item.id}>
            <MainDes>
              <Topdes>
                <Undertop>
                  <img height="20px" src="icons8-building-30.png" />
                  <p>Book on Skyscanner</p>
                </Undertop>

                <Undertop>
                  <p>You are booking with</p>
                  <img
                    height="20px"
                    src="https://content.skyscnr.com/9544b6207740975ed6509f113a1ac437/trip-logo-default.svg"
                  />
                </Undertop>
              </Topdes>

              <Abouthotel>
                <h2>{item.name}</h2>
                <img height="20px" src="5 stars.png" />

                <div>
                  <img height="20px" src="address.png" />
                  <p>{item.address}</p>
                </div>
              </Abouthotel>

              <Dates>
                <hr />
                <Checkin>
                  <div>
                    <p>Check in</p>
                    <h4>{item.checkin}</h4>
                  </div>

                  <div>
                    <p>Check out</p>
                    <h4>{item.checkout}</h4>
                  </div>
                </Checkin>

                <Checkin>
                  <div>
                    <p>Guest</p>
                    <h4>{item.guest}</h4>
                  </div>

                  <div>
                    <p>stay</p>
                    <h4>{item.stay}</h4>
                  </div>
                </Checkin>
              </Dates>
              <hr />
              <Hotelimages>
                <Mainhotelimage>
                  <img width="100%" src={item.url} />
                </Mainhotelimage>

                <ChangeRoom>
                  <p>Superior Room</p>
                  <p>Change Room</p>
                </ChangeRoom>

                <RoomsDes>
                  <div>
                    <img height="20px" src="squarefeet.png" />
                    <p>32 m²</p>
                  </div>

                  <div>
                    <img height="20px" src="bed.png" />
                    <p>1 x king bed, 2 x Semi-double bed</p>
                  </div>

                  <div>
                    <img height="20px" src="not avial.png" />
                    <p>Meals not included</p>
                  </div>

                  <div>
                    <img height="20px" src="nope.png" />
                    <p>Non-refundable</p>
                  </div>
                  <div>
                    <img height="20px" src="doller.png" />
                    <p>Pay now</p>
                  </div>

                  <div>
                    <img height="20px" src="guest.png" />
                    <p>Up to 2 guests</p>
                  </div>

                  <div>
                    <img src="hoyrs.png" />
                  </div>
                </RoomsDes>
              </Hotelimages>
            </MainDes>

            <Pricedes>
              <div>
                <p>1 night</p>
                <p>₹ 2,391.42</p>
              </div>

              <div>
                <p>Taxes and fees</p>
                <p>₹ 669.59</p>
              </div>

              <Others>
                <p>Other</p>
                <p>₹ 669.59</p>
              </Others>

              <hr />

              <div>
                <h2>Total</h2>
                <h2>₹ 3,061.01</h2>
              </div>

              <div>
                <h4></h4>
                <p>Pay now ₹ 3,061.01</p>
              </div>
            </Pricedes>

            <Refund>
              <div>
                <img height="30px" src="non refundablwe.png" />
                <h2>Non-refundable</h2>
              </div>

              <p>
                If you cancel or don't attend your hotel booking, you'll not be
                refunded any of your original payment.
              </p>

              <img height="25px" src="final confirmation time.png" />

              <p>
                You can cancel this booking for free at any time before it is
                confirmed. If your booking can’t be confirmed, you’ll receive a
                full refund.
              </p>
            </Refund>
          </HotelsDes>
        );
      })}
    </>
  );
};

export default HotelsDetails;
