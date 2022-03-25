import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products/Products";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Products />
    </div>
  );
}

export default App;
