import "./App.css";
//import { CartPage } from "./Components/CartPage/CartPage";
import MainPaymentPage from "./Components/Payment-page/MainPaymentPage";

export const API_KEY= process.env.REACT_APP_API_KEY
function App() {
  return (
    <div className="App">
      {/* <CartPage /> */}
      <MainPaymentPage/>
    </div>
  );
}

export default App;
