import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "./commonComponent/NotFound";
import Main from "./02mainCompnents/Main";
import User from "./03userComponents/User";
import Product from "./04productComponents/Product";

function App() {
  console.log("App");

  return (
    <div className="ViewGood">
      <h1>React Router Dom Study</h1>

      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
