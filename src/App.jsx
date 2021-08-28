import "./App.css";
import { CartPage } from "./Components/CartPage/CartPage";
import { Switch, Route } from "react-router-dom";
import HomeSkyPg from "./Components/HomePage/Home_skyscanner";
import { useRef } from "react";
import { HotelDescription } from "./Components/HotelDescription/HotelDescription";
import MainPaymentPage from "./Components/Payment-page/MainPaymentPage";
function App() {
  const formData = useRef();

  return (
    <div className="App">
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
        <Route exact path="/payment/:name">
          <MainPaymentPage formData={formData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
