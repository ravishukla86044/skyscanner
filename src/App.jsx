import "./App.css";
import { CartPage } from "./Components/CartPage/CartPage";
import { Switch, Route } from "react-router-dom";
import HomeSkyPg from "./Components/HomePage/Home_skyscanner";
import { useRef } from "react";
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
      </Switch>
      <CartPage />
    </div>
  );
}

export default App;
