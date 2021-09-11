import { useState } from "react";
import { Item } from "./Item";
import styles from "./ItemPage.module.css";
import { Map } from "./Map";

function ItemPage({ toggleDrawer, data, setData, dataa, formData, form }) {
  const [low, setLow] = useState(false);
  const [pBool, setpBool] = useState(false);
  const [sBool, setSBool] = useState(false);
  //console.log(form, "this is form in itempage");
  const handleBottom = (e, n) => {
    setpBool(false);
    setSBool(false);
    let a = e.currentTarget.parentElement.children;
    for (var i = 0; i < a.length; i++) {
      a[i].classList.remove(`${styles.blueBottom}`);
    }
    e.currentTarget.classList.add(`${styles.blueBottom}`);

    if (n === 1) {
      setData(dataa);
    } else if (n === 2) {
      setData((pre) => [...pre].sort((a, b) => -(Number(a.rating) - Number(b.rating))));
    } else if (n === 3) {
      setpBool(true);
      setLow((pre) => !pre);

      setData((pre) =>
        [...pre].sort((a, b) =>
          low
            ? Number(a.lowPrice.price) - Number(b.lowPrice.price)
            : -(Number(a.lowPrice.price) - Number(b.lowPrice.price))
        )
      );
    } else if (n === 4) {
      setSBool(true);
      setLow((pre) => !pre);
      setData((pre) =>
        [...pre].sort((a, b) =>
          low ? Number(a.star) - Number(b.star) : -(Number(a.star) - Number(b.star))
        )
      );
    } else if (n === 5) {
      setData((pre) =>
        [...pre].sort((a, b) => Number(a.distancefromCity) - Number(b.distancefromCity))
      );
    }
  };

  return (
    <div className={styles.Con}>
      <div className={styles.Box}>
        <div className={styles.section}>
          <div>
            <div onClick={toggleDrawer("left", true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#0770e3"
                width="1.125rem;"
                height="1.125rem"
              >
                <path
                  d="M7.94 1.94A1.5 1.5 0 0 0 7.5 3v.75a.75.75 0 0 1-.75.75H3a1.5 1.5 0 0 0 0 3h3.75a.75.75 0 0 1 .75.75V9a1.5 1.5 0 0 0 3 0V3a1.5 1.5 0 0 0-2.56-1.06zm.282 17.56H9a1.5 1.5 0 1 0 0-3H3a1.5 1.5 0 1 0 0 3h5.222zm6.998.22a.75.75 0 0 1 .53-.22H21a1.5 1.5 0 1 0 0-3h-5.25a.75.75 0 0 1-.75-.75V15a1.5 1.5 0 1 0-3 0v6a1.5 1.5 0 1 0 3 0v-.75a.75.75 0 0 1 .22-.53zM13.94 4.94A1.5 1.5 0 0 0 15 7.5h6a1.5 1.5 0 0 0 0-3h-6a1.5 1.5 0 0 0-1.06.44z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p>Filter</p>
            </div>
            <div>
              <div>
                <p>{`${data.length} hotels found in ${form.location}`}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1.125rem"
                  height="1.125rem"
                  fill="#444560"
                  class="HotelCardsSearchSummary_HotelCardsSearchSummary__infoIcon__1HOki BpkIcon_bpk-icon--rtl-support__qFRf3"
                >
                  <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zM12 6a1.498 1.498 0 1 1-1.498 1.498A1.498 1.498 0 0 1 12 6zm1.493 10.676a1.5 1.5 0 0 1-2.98.001l-.01-.175-.003-4.501.01-.176a1.5 1.5 0 0 1 2.98 0l.01.175.003 4.501z"></path>
                </svg>
              </div>
              <div
                style={{
                  color: "#0770e3",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "-0.5px",
                }}
              >
                Learn more about the price changes
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={(e) => {
                handleBottom(e, 1);
              }}
              className={styles.blueBottom}
            >
              Best
              <svg
                marginLeft="5px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16px"
                height="16px"
                class="HotelCardsSortingBar_HotelCardsSortingBar__icon__fJVhf"
                fill="#0770e3"
              >
                <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zM12 6a1.498 1.498 0 1 1-1.498 1.498A1.498 1.498 0 0 1 12 6zm1.493 10.676a1.5 1.5 0 0 1-2.98.001l-.01-.175-.003-4.501.01-.176a1.5 1.5 0 0 1 2.98 0l.01.175.003 4.501z"></path>
              </svg>
            </div>
            <div
              onClick={(e) => {
                handleBottom(e, 2);
              }}
            >
              Guest Rating
            </div>
            <div
              onClick={(e) => {
                handleBottom(e, 3);
              }}
            >
              Price{pBool && (low ? " (high to low)" : " (low to high)")}
            </div>
            <div
              onClick={(e) => {
                handleBottom(e, 4);
              }}
            >
              Stars{sBool && (low ? " (5 to 1)" : " (1 to 5)")}
            </div>
            <div
              onClick={(e) => {
                handleBottom(e, 5);
              }}
            >
              Distance
            </div>
          </div>
          <div className={styles.map}>
            <Map
              center={{ lat: 12.9716, lng: 77.5946 }}
              zoom={15}
              places={[
                {
                  id: 1,
                  name: "Radisson Blu Bengaluru Outer Ring Road",
                  latitude: "12.9726",
                  longitude: "77.5959",
                },
                {
                  id: 2,
                  name: "The Park Bangalore",
                  latitude: "12.9736",
                  longitude: "77.5969",
                },
                {
                  id: 3,
                  name: "Hilton Bangalore Embassy GolfLinks",
                  latitude: "12.9756",
                  longitude: "77.5979",
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.ItemsDiv}>
          {data.map((item) => (
            <Item data={item} formData={formData} form={form} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { ItemPage };
