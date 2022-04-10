import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Inventory from "./Components/Inventory/Inventory";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Order from "./Components/Orders/Orders";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Shipment from "./Components/Shipment/Shipment";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route
          path="/Inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/Order" element={<Order></Order>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="/Shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
