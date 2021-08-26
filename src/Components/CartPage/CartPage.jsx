import React from "react";
import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { ItemPage } from "./ItemPage";
import styles from "./SidePopUp.module.css";
import { Star } from "./Item";
import { dataa } from "./utils/dataa";

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
    title: "With honours",
    id: 27,
  },
  {
    title: "Excellent",
    id: 28,
  },
  {
    title: "Very good",
    id: 29,
  },
  {
    title: "Good",
    id: 30,
  },
  {
    title: "Satisfactory",
    id: 31,
  },
];

function ListItem({ item, index, star = false }) {
  return (
    <div className={styles.listItem}>
      <input type="checkbox" className={styles.check} />

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

function CartPage() {
  const [data, setData] = useState(dataa);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

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
          <ListItem item={item} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"View price as"} />
        {viewPrice.map((item) => (
          <ListItem item={item} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Star rating"} />
        {starRating.map((item, index) => (
          <ListItem item={item} index={index} star={true} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Guest rating"} />
        {guestRating.map((item, index) => (
          <ListItem item={item} index={index} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Accommodation type"} />
        {accomodationType.map((item, index) => (
          <ListItem item={item} index={index} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Cancellation policy"} />
        {policy.map((item, index) => (
          <ListItem item={item} index={index} />
        ))}
      </div>
      <div className={styles.listBox}>
        <ListHeading heading={"Meal plan"} />
        {mealPlan.map((item, index) => (
          <ListItem item={item} index={index} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </div>
      <ItemPage toggleDrawer={toggleDrawer} data={data} setData={setData} dataa={dataa} />
    </>
  );
}
export { CartPage };
