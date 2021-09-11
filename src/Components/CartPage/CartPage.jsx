import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { ItemPage } from "./ItemPage";
import styles from "./CartPage.module.css";
import { Star } from "./Item";
import { dataa } from "./utils/dataa";
import Heading from "../HomePage/Components/Header/Heading";
import Footer from "../HomePage/Components/Footer/Footer";
import { Form } from "./Form";
import axios from "axios";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const bookWithPieceOfMind = [
  {
    title: "Free cancellation",
    id: 1,
  },
  {
    title: "Cleanliness",
    id: 2,
  },
  {
    title: "Pay on arrival",
    id: 3,
  },
];

const viewPrice = [
  {
    title: "₹ 217 - ₹ 834",
    id: 4,
  },
  {
    title: "₹ 834 - ₹ 1450",
    id: 5,
  },
  {
    title: "₹ 1450 - ₹ 2067",
    id: 6,
  },
  {
    title: "₹ 2067 - ₹ 2684",
    id: 7,
  },
  {
    title: "₹ 2684 - ₹ 3300",
    id: 8,
  },
  {
    title: "₹ 3300 +",
    id: 9,
  },
];

const starRating = [
  {
    title: "5 Stars",
    id: 10,
  },
  {
    title: "4 Stars",
    id: 11,
  },
  {
    title: "3 Stars",
    id: 12,
  },
  {
    title: "2 Stars",
    id: 13,
  },
  {
    title: "1 Stars",
    id: 14,
  },
];

const accomodationType = [
  {
    title: "Hotel",
    id: 15,
  },
  {
    title: "Appartment",
    id: 16,
  },
  {
    title: "Guest house",
    id: 17,
  },
  {
    title: "Hostels",
    id: 18,
  },
  {
    title: "Holiday rentals",
    id: 19,
  },
  {
    title: "Unique stays",
    id: 20,
  },
];

const policy = [
  {
    title: "Free cancellation",
    id: 21,
  },
  {
    title: "Non redundable",
    id: 22,
  },
];

const mealPlan = [
  {
    title: "Breakfast included",
    id: 23,
  },
  {
    title: "Meals not included",
    id: 24,
  },
  {
    title: "Some meals included",
    id: 25,
  },
  {
    title: "Meals included",
    id: 26,
  },
];

const guestRating = [
  {
    title: "With honours (5)",
    id: 27,
  },
  {
    title: "Excellent (4)",
    id: 28,
  },
  {
    title: "Very good (3)",
    id: 29,
  },
  {
    title: "Good (2)",
    id: 30,
  },
  {
    title: "Satisfactory (1)",
    id: 31,
  },
];

function ListItem({ item, index, star = false, handleCheckbox, arr }) {
  return (
    <div className={styles.listItem}>
      <input
        onChange={(e) => {
          handleCheckbox(e, item);
        }}
        type="checkbox"
        className={styles.check}
        checked={arr[item.id]}
      />

      <div>
        <div className={styles.star}>
          <p>{item.title}</p>
          {star && (
            <div style={{ marginLeft: "5px" }}>
              <Star n={5 - index} />
            </div>
          )}
        </div>
        <p className={styles.count}>22</p>
      </div>
    </div>
  );
}
function ListHeading({ heading }) {
  return <div className={styles.listHeading}>{heading}</div>;
}

function CartPage({ formData }) {
  const arrr = Array(31).fill(false);

  const [data, setData] = useState(dataa);
  const [form, setForm] = useState({});
  const [arr, setArr] = useState(arrr);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  useState(() => {
    setData((pre) => [...pre]);
    axios
      .get("https://ravi-mock-server.herokuapp.com/userData/1")
      .then((res) => {
        //console.log(res, "this is response");
        setForm(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
    console.log("useusss");
  }, [formData]);

  const handleCheckbox = (e, item) => {
    if (item.id === 4 && arr[item.id] === false) {
      setData((pre) =>
        [...pre].filter((i) => Number(i.lowPrice.price) >= 217 && Number(i.lowPrice.price) < 834)
      );
    } else if (item.id === 5 && arr[item.id] === false) {
      setData((pre) =>
        [...pre].filter((i) => Number(i.lowPrice.price) >= 834 && Number(i.lowPrice.price) < 1450)
      );
    } else if (item.id === 6 && arr[item.id] === false) {
      setData((pre) =>
        [...pre].filter((i) => Number(i.lowPrice.price) >= 1450 && Number(i.lowPrice.price) < 2067)
      );
    } else if (item.id === 7 && arr[item.id] === false) {
      setData((pre) =>
        [...pre].filter((i) => Number(i.lowPrice.price) >= 2067 && Number(i.lowPrice.price) < 2684)
      );
    } else if (item.id === 8 && arr[item.id] === false) {
      setData((pre) =>
        [...pre].filter((i) => Number(i.lowPrice.price) >= 2684 && Number(i.lowPrice.price) < 3300)
      );
    } else if (item.id === 9 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.lowPrice.price) >= 3300));
    } else if (item.id === 10 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.star) >= 5));
    } else if (item.id === 11 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.star) === 4));
    } else if (item.id === 12 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.star) === 3));
    } else if (item.id === 13 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.star) === 2));
    } else if (item.id === 14 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.star) === 1));
    } else if (item.id === 27 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.rating) === 5));
    } else if (item.id === 28 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.rating) === 4));
    } else if (item.id === 29 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.rating) === 3));
    } else if (item.id === 30 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.rating) === 2));
    } else if (item.id === 31 && arr[item.id] === false) {
      setData((pre) => [...pre].filter((i) => Number(i.rating) === 1));
    } else {
      setData(dataa);
    }
    setArr((pre) => [...pre].map((itemm, i) => (i === item.id ? !itemm : itemm)));
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={styles.list} role="presentation">
      <div className={styles.listBox}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg className={styles.phoneIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 7.5h-.001zm12 6.75V21a.75.75 0 0 1-.75.75h-.287a.75.75 0 0 1-.67-.415L21 18.75H3l-1.293 2.585a.75.75 0 0 1-.671.415H.75A.75.75 0 0 1 0 21v-6.75a2.99 2.99 0 0 1 .823-2.064 2.108 2.108 0 0 0 .677-1.4v-5.31a1.228 1.228 0 0 1 .684-1.16l1.991-.811c4.106-1.673 11.544-1.673 15.65 0l1.991.813a1.226 1.226 0 0 1 .684 1.16l-.003 5.305a2.112 2.112 0 0 0 .678 1.4A2.992 2.992 0 0 1 24 14.25zm-17.25-3h3a.75.75 0 0 0 0-1.5H8.562a3.752 3.752 0 0 1 6.687-.374.75.75 0 1 0 1.298-.752 5.251 5.251 0 0 0-9.047-.08V7.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 .75.75zM18 12a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h1.188a3.751 3.751 0 0 1-6.687.374.75.75 0 1 0-1.298.752 5.251 5.251 0 0 0 9.047.079V15a.75.75 0 0 0 1.5 0z"></path>
          </svg>
          <ListHeading heading={"Book with peace of mind"} />
        </div>

        {bookWithPieceOfMind.map((item) => (
          <ListItem item={item} handleCheckbox={handleCheckbox} arr={arr} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"View price as"} />
        {viewPrice.map((item) => (
          <ListItem item={item} handleCheckbox={handleCheckbox} arr={arr} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Star rating"} />
        {starRating.map((item, index) => (
          <ListItem
            arr={arr}
            item={item}
            index={index}
            star={true}
            handleCheckbox={handleCheckbox}
          />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Guest rating"} />
        {guestRating.map((item, index) => (
          <ListItem arr={arr} item={item} index={index} handleCheckbox={handleCheckbox} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Accommodation type"} />
        {accomodationType.map((item, index) => (
          <ListItem arr={arr} item={item} index={index} handleCheckbox={handleCheckbox} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Cancellation policy"} />
        {policy.map((item, index) => (
          <ListItem arr={arr} item={item} index={index} handleCheckbox={handleCheckbox} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Meal plan"} />
        {mealPlan.map((item, index) => (
          <ListItem arr={arr} item={item} index={index} handleCheckbox={handleCheckbox} />
        ))}
      </div>
    </div>
  );

  if (!formData || !formData.current) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <>
      <Heading />
      <Form form={form} setForm={setForm} formData={formData} />
      <div className={styles.sideBar}>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </div>
      <ItemPage
        form={form}
        formData={formData}
        toggleDrawer={toggleDrawer}
        data={data}
        setData={setData}
        dataa={dataa}
      />
      <Footer />
    </>
  );
}
export { CartPage };
