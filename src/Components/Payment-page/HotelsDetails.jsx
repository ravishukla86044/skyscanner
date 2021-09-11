import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const HotelsDetails = ({ formData }) => {
  const [hotelsData, setHotelData] = useState([]);
  const x = 10;

  useEffect(() => {
    axios.get("https://ravi-mock-server.herokuapp.com/userData/1").then((res) => {
      setHotelData([res.data]);
      //console.log(res.data, "this is new");
    });
  }, []);
  //console.log(hotelsData);
  const HotelsDes = styled.div`
    width: 545.6px;
    height: auto;
    background-color: #f1f2f8;
    padding: 30px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    hr {
      width: 100%;
      height: 0.1px;
      opacity: 0.4;
      background-color: #a9a9b6;
    }
  `;
  const MainDes = styled.div`
    width: 450px;
    height: 950px;
    background-color: #ffffff;
    margin: auto;

    padding: 20px 25px 25px 25px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  `;
  const Topdes = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Undertop = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    p {
      margin: 0px;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  `;
  const Abouthotel = styled.div`
    div {
      display: flex;
      gap: 5px;
      align-items: center !important;
      p {
        margin-top: -3px;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 400;
        margin: 0px;
      }
    }
    h2 {
      margin-bottom: 0px;
      font-size: 1.5rem;
      line-height: 1.9375rem;
    }
  `;

  const Dates = styled.div`
    margin: 20px 0px 20px 0px;
    height: 160px;
    div {
      height: 80px;
      width: 420px;

      h4 {
        font-size: 15px;
        line-height: 1.25rem;
        margin: 0px;
      }
    }

    p {
      color: #68697f;
      font-size: 1rem;
      line-height: 0.25rem;
      font-weight: 400;
    }
  `;
  const Checkin = styled.div`
    display: flex;
    justify-content: space-around;
    line-height: 3;
    div {
      margin: 10px;
    }
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
      width: 180px;
      display: flex;
      gap: 10px;
      align-items: center;

      p {
        margin: 0px;
        font-size: 0.875rem;
        line-height: 1.125rem;
        font-weight: 400;
        color: #68697f;
      }
    }
  `;
  const ChangeRoom = styled.div`
    display: flex;
    justify-content: space-between;
    color: #444560;
    font-size: 1rem;
    font-weight: 700;
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
      opacity: 0.4;
      background-color: #a9a9b6;
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
    height: 250px;
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
      margin-top: 6px;
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
                  <img height="20px" src="https://i.ibb.co/jLCcLrh/icons8-building-30.png" alt="" />
                  <p>Book on Skyscanner</p>
                </Undertop>

                <Undertop>
                  <p>You are booking with</p>
                  <img
                    height="20px"
                    src="https://content.skyscnr.com/9544b6207740975ed6509f113a1ac437/trip-logo-default.svg "
                    alt=""
                  />
                </Undertop>
              </Topdes>

              <Abouthotel>
                <h2>{item.target.name}</h2>
                <img height="20px" src="https://i.ibb.co/4W0mSyv/5-stars.png" alt="" />

                <div>
                  <img height="20px" src="https://i.ibb.co/m4GMRGx/address.png" alt="" />
                  <p>{item.location}</p>
                </div>
              </Abouthotel>

              <Dates>
                <hr />
                <Checkin>
                  <div>
                    <p>Check in</p>
                    <h4>{item.sDate.split("T").slice(0, 1)}</h4>
                  </div>

                  <div>
                    <p>Check out</p>
                    <h4>{item.lDate.split("T").slice(0, 1)}</h4>
                  </div>
                </Checkin>

                <Checkin>
                  <div>
                    <p>Guest</p>
                    <h4>{`${item.stays} adults`}</h4>
                  </div>

                  <div>
                    <p>Days</p>
                    <h4>{`${item.target.days}`}</h4>
                  </div>
                </Checkin>
              </Dates>
              <hr />
              <Hotelimages>
                <Mainhotelimage>
                  <img width="100%" src={item.target.img[0]} alt="" />
                </Mainhotelimage>

                <ChangeRoom>
                  <p>Superior Room</p>
                  <p>Change Room</p>
                </ChangeRoom>

                <RoomsDes>
                  <div>
                    <img height="20px" src="https://i.ibb.co/VvcGyvw/squarefeet.png" alt="" />
                    <p>32 m²</p>
                  </div>

                  <div>
                    <img height="20px" width="22" src="https://i.ibb.co/GvLgwHv/bed.png" alt="" />
                    <p>1 x king bed, 2 x Semi-double bed</p>
                  </div>

                  <div>
                    <img height="20px" src="https://i.ibb.co/1fDk4hb/not-avial.png" alt="" />
                    <p>Meals not included</p>
                  </div>

                  <div>
                    <img height="20px" src="https://i.ibb.co/FHskJN0/non-refundablwe.png" alt="" />
                    <p>Non-refundable</p>
                  </div>
                  <div>
                    <img
                      height="20px"
                      width="25"
                      src="https://i.ibb.co/PTkMpk3/doller.png"
                      alt=""
                    />
                    <p>Pay now</p>
                  </div>

                  <div>
                    <img height="20px" src="https://i.ibb.co/c69G0xy/guest.png" alt="" />
                    <p>Up to 2 guests</p>
                  </div>

                  <div>
                    <img src="https://i.ibb.co/kJwFgTg/hoyrs.png" alt="" />
                  </div>
                </RoomsDes>
              </Hotelimages>
            </MainDes>

            <Pricedes>
              <div>
                <p>{`${item.target.days} night`}</p>
                <p>{`₹${item.target.TotolPrice}`} </p>
              </div>

              <div>
                <p>Taxes and fees</p>
                <p>{`₹${Math.floor((Number(item.target.TotolPrice) * 18) / 100)}`}</p>
              </div>

              <Others>
                <p>Other</p>
                <p>{`₹ ${Number(350)}`}</p>
              </Others>

              <hr />

              <div>
                <h2>Total</h2>
                <h2>{`₹${
                  Number(item.target.TotolPrice) +
                  Math.floor((Number(item.target.TotolPrice) * 18) / 100) +
                  Number(350)
                }`}</h2>
              </div>

              <div>
                <h4></h4>
                <p>
                  {" "}
                  {`Pay now ₹${
                    Number(item.target.TotolPrice) +
                    Math.floor((Number(item.target.TotolPrice) * 18) / 100) +
                    Number(350)
                  }`}
                </p>
              </div>
            </Pricedes>

            <Refund>
              <div>
                <img height="30px" src="https://i.ibb.co/sC1XS4G/nope.png" alt="" />
                <h2>Non-refundable</h2>
              </div>

              <p>
                If you cancel or don't attend your hotel booking, you'll not be refunded any of your
                original payment.
              </p>

              <img height="60px" width="270px" src="https://i.ibb.co/kJwFgTg/hoyrs.png" alt="" />

              <p>
                You can cancel this booking for free at any time before it is confirmed. If your
                booking can’t be confirmed, you’ll receive a full refund.
              </p>
            </Refund>
          </HotelsDes>
        );
      })}
    </>
  );
};

export default HotelsDetails;
