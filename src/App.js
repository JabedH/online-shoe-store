import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Inventory from "./Components/Inventory/Inventory";
import About from "./Components/About/About";
import NotFound from "./Components/NavBar/NotFound/NotFound";
import Order from "./Components/Orders/Orders";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/Order" element={<Order></Order>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
