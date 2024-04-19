import "./App.css";

import { Route, Switch } from "react-router-dom";
import User from "./03userComponents/User";
import Product from "./04productComponents/Product";
import Purchase from "./05purchaseComponents/Purchase";
import NotFound from "./commonComponent/NotFound";
import Etc from "./06etcComponents/Etc";
import Main from "./02mainComponents/Main";
import CommonTop from "./commonComponent/CommonTop";

function App() {
  console.log("App");

  return (
    <div className="ViewGood">
      {/* - 모든 Page 상단에 동일한 화면을 구성하려면... */}
      <CommonTop />

      <Switch>
        <Route path="/" exact={true}>
          <Main />
        </Route>
        <Route path="/User">
          <User />
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
        <Route path="/Purchase">
          <Purchase />
        </Route>
        <Route path="/Etc">
          <Etc />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
