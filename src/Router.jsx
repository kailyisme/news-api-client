import { BrowserRouter, Switch } from "react-router-dom";
import ListNews from "./Routes/ListNews";

export default function Router() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Router exact path="/">
            <ListNews />
          </Router>
        </Switch>
      </BrowserRouter>
    </main>
  );
}
