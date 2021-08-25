import { useState } from "react";
import { Item } from "./Item";
import styles from "./ItemPage.module.css";
import { dataa } from "./utils/dataa";
function ItemPage({ stay = 3 }) {
  const [data, setData] = useState(dataa);
  const handleBottom = (e) => {
    let a = e.currentTarget.parentElement.children;
    for (var i = 0; i < a.length; i++) {
      a[i].classList.remove(`${styles.blueBottom}`);
    }
    e.currentTarget.classList.add(`${styles.blueBottom}`);

    if (e.currentTarget.textContent === "Best") {
      setData(dataa);
    } else if (e.currentTarget.textContent === "Guest Rating") {
      setData((pre) => [...pre].sort((a, b) => -(Number(a.rating) - Number(b.rating))));
    } else if (e.currentTarget.textContent === "Price") {
    }
  };

  return (
    <div className={styles.Con}>
      <div className={styles.Box}>
        <div className={styles.section}>
          <div>
            <div>
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
                <p>{`${data.length} hotels found in Bangaluru`}</p>
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
            <div onClick={handleBottom} className={styles.blueBottom}>
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
            <div onClick={handleBottom}>Guest Rating</div>
            <div onClick={handleBottom}>Price</div>
            <div onClick={handleBottom}>Stars</div>
            <div onClick={handleBottom}>Distance</div>
          </div>
          <div></div>
        </div>
        <div className={styles.ItemsDiv}>
          {data.map((item) => (
            <Item data={item} stay={stay} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { ItemPage };