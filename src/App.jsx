import "./App.scss";
import Router from "./Router";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  return (
    <div className="App">
      <img
        src="/nc_news.png"
        className="header-image"
        alt="website title - NC News with an arrow underneath"
      />
      <BurgerMenu>
        <button onClick={() => {window.location = "/"}}>
          Most Recent News
        </button>
      </BurgerMenu>
      <Router />
      <footer>© Kaily Newman 2021</footer>
    </div>
  );
}

export default App;
