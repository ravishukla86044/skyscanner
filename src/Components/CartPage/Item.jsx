import styles from "./Item.module.css";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Star({ n }) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(1);
  }
  return (
    <div className={styles.star}>
      <div>
        {arr.map((item) => (
          <StarRoundedIcon />
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

function PriceArr({ items }) {
  return (
    <div className={styles.PriceArr}>
      <div>
        <p>{items.siteName}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M22.5 9a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 0 1 3 0z"></path>
          <path d="M22.5 3A1.5 1.5 0 0 1 21 4.5h-6a1.5 1.5 0 0 1 0-3h6A1.5 1.5 0 0 1 22.5 3z"></path>
          <path d="M12.44 11.56a1.5 1.5 0 0 1 0-2.12l7.5-7.5a1.5 1.5 0 0 1 2.12 2.12l-7.5 7.5a1.5 1.5 0 0 1-2.12 0z"></path>
          <path d="M7.5 6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3H15a3 3 0 0 0 3-3V15a1.5 1.5 0 0 1 3 0v1.5a6 6 0 0 1-6 6H7.5a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6H9a1.5 1.5 0 0 1 0 3z"></path>
        </svg>
      </div>
      <p>{`₹ ${items.price}`}</p>
    </div>
  );
}

function Item({ data, formData, form }) {
  const [width, setWidth] = useState(window.innerWidth);
  const history = useHistory();
  // const sarr = formData.current.sDate.split(" ");
  // sarr.splice(2);
  // console.log(sarr);
  const d1 = new Date(form.sDate);
  const d2 = new Date(form.lDate);
  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //console.log(diffDays, typeof diffDays, formData);
  window.addEventListener("resize", handleResize);
  function handleResize() {
    setWidth(window.innerWidth);
    // console.log("no");
  }

  useEffect(() => {
    // console.log("yes");
  }, [width]);

  const handleDetails = (data) => {
    formData.current.target = data;
    formData.current.target.TotolPrice = data.lowPrice.price * Math.ceil(form.stays / 2) * diffDays;
    formData.current.target.days = diffDays;
    history.push(`/hotelsdescription/${data.name}`);
    axios.put("https://ravi-mock-server.herokuapp.com/userData/1", formData.current);
  };

  return width > 600 ? (
    <div className={styles.Con}>
      <div className={styles.img}>
        <img src={data.img[0]} alt="" />
      </div>
      <div>
        <div className={styles.left}>
          <div>
            <div className={styles.left1Child}>
              <div>
                <span>
                  {data.name} <Star n={data.star} />
                </span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1.125rem"
                  height="1.125rem"
                  fill="#68697f"
                >
                  <path d="M13.5 16.963a.806.806 0 0 1 .595-.76 7.5 7.5 0 1 0-4.19 0 .806.806 0 0 1 .595.76V21a1.5 1.5 0 0 0 3 0z"></path>
                </svg>
                <p>{`${data.distancefromCity} km from city center`}</p>
              </div>
              <div>
                <div className={styles.rating}>{data.rating}</div>
                <div>
                  <div className={styles.dotImg}>
                    <div>
                      <img
                        src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-64600-4.svg"
                        alt=""
                      />
                    </div>
                    <Dots n={data.rating} />
                  </div>
                  <div className={styles.rev}>{`${data.reviews} reviews`}</div>
                </div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M6.176 4.83a.69.69 0 0 1 .92-.251l6.861 3.69a1.502 1.502 0 0 1 .712.846l2.624 7.864a1.5 1.5 0 0 0 2.846-.948l-2.624-7.862a4.497 4.497 0 0 0-2.135-2.537l-6.862-3.69a3.687 3.687 0 0 0-3.652 6.403q.067.04.135.078l6.247 3.404a1.499 1.499 0 1 0 1.437-2.631L6.437 5.792a.69.69 0 0 1-.275-.936l.013-.024zm11.04 14.672a1.5 1.5 0 1 0-.134 2.997q.067.003.134 0h4.5a1.5 1.5 0 0 0 .135-2.997q-.067-.003-.135 0zm-10.5 0a3 3 0 1 1-3-2.997 2.999 2.999 0 0 1 3 2.997z"></path>
                  <path d="M2.898 12.009c-1.205 0-2.182 1.449-2.182 2.68v.46a.547.547 0 0 0 .816.425 4.498 4.498 0 0 1 6.121 6.108.547.547 0 0 0 .424.817h3.957a2.207 2.207 0 0 0 2.182-2.231v-1.116c0-3.696-2.93-7.142-6.545-7.142H2.898z"></path>
                </svg>
                <p>{`Cleanliness ${data.cleanliness}/5`}</p>
              </div>
            </div>
            <div className={styles.left2Child}>
              <div>{data.price && data.price.map((item) => <PriceArr items={item} />)}</div>
            </div>
          </div>
        </div>
        <div className={styles.mid}></div>
        <div className={styles.right}>
          <div>
            <div className={styles.rUpper}>
              <div>
                <p>Lowest Price</p>
                <p> we found for this hotel</p>
              </div>
              <div>
                <div className={styles.siteIcon}>
                  <img src={data.lowPrice.img} alt="" />
                </div>
                <p>{`₹ ${data.lowPrice.price}`}</p>
                <p>a night</p>
                <p>
                  {`₹ ${data.lowPrice.price * Math.ceil(form.stays / 2) * diffDays}`}{" "}
                  <span>total stay</span>
                </p>
                <span>Taxes and fees not included</span>
              </div>
            </div>
            <div className={styles.rLower}>
              <button
                onClick={() => {
                  handleDetails(data);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      onClick={() => {
        handleDetails(data);
      }}
      className={styles.smallCon}
    >
      <div>
        <img src={data.img} alt="" />
        <div>
          <p>{data.name} </p>
          <Star n={data.star} />
        </div>
      </div>
      <div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.rating}>{data.rating}</div>
            <div>
              <div className={styles.dotImg}>
                <div>
                  <img
                    src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-64600-4.svg"
                    alt=""
                  />
                </div>
                <Dots n={data.rating} />
              </div>
              <div className={styles.rev}>{`${data.reviews} reviews`}</div>
            </div>
          </div>
          <p>{`Cleanliness ${data.cleanliness}/5`}</p>
        </div>
        <div className={styles.dis}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.125rem"
              height="1.125rem"
              fill="#68697f"
            >
              <path d="M13.5 16.963a.806.806 0 0 1 .595-.76 7.5 7.5 0 1 0-4.19 0 .806.806 0 0 1 .595.76V21a1.5 1.5 0 0 0 3 0z"></path>
            </svg>
            <p>{`${data.distancefromCity} km from city center`}</p>
          </div>
          <div className={styles.sPrice}>
            <p>{`₹ ${data.lowPrice.price}`}</p>
            <p>a night</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Item, Star };
