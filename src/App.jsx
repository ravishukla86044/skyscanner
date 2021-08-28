import "./App.css";
<<<<<<< HEAD
import { CartPage } from "./Components/CartPage/CartPage";
import { Switch, Route } from "react-router-dom";
import HomeSkyPg from "./Components/HomePage/Home_skyscanner";
import { useRef } from "react";
import { HotelDescription } from "./Components/HotelDescription/HotelDescription";
=======
//import { CartPage } from "./Components/CartPage/CartPage";
import MainPaymentPage from "./Components/Payment-page/MainPaymentPage"
>>>>>>> 16861a095511ec044734e3e2a0c3c898ac994ae5
function App() {
  const formData = useRef();

  return (
    <div className="App">
<<<<<<< HEAD
      <Switch>
        <Route exact path="/">
          <HomeSkyPg formData={formData} />
        </Route>
        <Route path="/hotels">
          <CartPage formData={formData} />
        </Route>
        <Route exact path="/hotelsdescription/:name">
          <HotelDescription formData={formData} />
        </Route>
      </Switch>
      <CartPage />
=======
      {/* <CartPage /> */}
      <MainPaymentPage/>
>>>>>>> 16861a095511ec044734e3e2a0c3c898ac994ae5
    </div>
  );
}

export default App;
