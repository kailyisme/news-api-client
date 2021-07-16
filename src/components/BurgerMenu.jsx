import { useState } from "react";
import BurgerMenuIMG from "../resources/BurgerMenuIMG.svg";

export default function BurgerMenu() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  return (
    <>
      <button
        className="burger-menu-button"
        onClick={() => setIsMenuCollapsed((currentState) => !currentState)}
      >
        <img src={BurgerMenuIMG} alt="burger menu" />
      </button>
      {isMenuCollapsed ? null : <div className="burger-menu"></div>}
    </>
  );
}
