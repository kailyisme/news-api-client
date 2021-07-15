import { BrowserRouter, Switch, Route } from "react-router-dom";
import Article from "./Routes/Article";
import MostRecentNews from "./Routes/MostRecentNews";
import Error404 from "./Routes/Error404";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MostRecentNews} />
        <Route exact path="/articles/:article_id" component={Article} />
        <Route path="/" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
