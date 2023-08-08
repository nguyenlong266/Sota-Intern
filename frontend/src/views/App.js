import "./App.scss";
import AdminPanel from "./administration/AdminPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/HomePage";
import ShipperPage from "./shipper/ShipperPage";
import Test from "./Test";
import { Register } from "../components";
import OrdersWaiting from "./shipper/OrdersWaiting";

// import ShopContextProvider from "../context/shop-context";

function App() {
  return <ShipperPage />;
}
export default App;
