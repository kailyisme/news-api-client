import { BrowserRouter, Switch, Route } from "react-router-dom";
import MostRecentNews from "./Routes/MostRecentNews";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MostRecentNews />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
