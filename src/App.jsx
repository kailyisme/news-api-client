import { useState } from "react";
import "./App.scss";
import BurgerMenu from "./resources/BurgerMenu.svg";
import Router from "./Router";

function App() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  return (
    <div className="App">
      <img
        src="/nc_news.png"
        className="header-image"
        alt="website title - NC News with an arrow underneath"
      />
      <button className="burger-menu">
        <img src={BurgerMenu} alt="burger menu" />
      </button>
      <Router />
      <footer>© Kaily Newman 2021</footer>
    </div>
  );
}

export default App;
