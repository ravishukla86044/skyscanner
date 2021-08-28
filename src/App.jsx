import "./App.css";
import { CartPage } from "./Components/CartPage/CartPage";
<<<<<<< HEAD
import{HotelDescription} from "./Components/HotelDescription/HotelDescription";
=======
import { Switch, Route } from "react-router-dom";
import HomeSkyPg from "./Components/HomePage/Home_skyscanner";
import { useRef } from "react";
import { HotelDescription } from "./Components/HotelDescription/HotelDescription";
>>>>>>> ddbd79673834854ae088d707d75137d2aac41cc8
function App() {
  const formData = useRef();

  return (
    <div className="App">
<<<<<<< HEAD
      {/* <CartPage /> */}
      <HotelDescription/>
=======
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
>>>>>>> ddbd79673834854ae088d707d75137d2aac41cc8
    </div>
  );
}

export default App;
