import "./App.css";
import { CartPage } from "./Components/CartPage/CartPage";
import { Switch, Route } from "react-router-dom";
import HomeSkyPg from "./Components/HomePage/Home_skyscanner";
import { useRef } from "react";
import { HotelDescription } from "./Components/HotelDescription/HotelDescription";
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
    </div>
  );
}

export default App;
