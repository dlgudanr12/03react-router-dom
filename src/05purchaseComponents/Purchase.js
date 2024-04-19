import React from "react";
import CommonTop from "../commonComponent/CommonTop";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../commonComponent/NotFound";
import Purchase01 from "./Purchase01";
import Purchase02 from "./Purchase02";
import Purchase03 from "./Purchase03";

const Purchase = () => {
  console.log("Purchase");
  let { path, url } = useRouteMatch();

  console.log(path);
  console.log(url);

  return (
    <div className="ViewGood">
      {/* <CommonTop /> */}
      <Link to="/Purchase/Purchase01/TV/1000">Purchase01</Link> &nbsp;&nbsp;
      <Link to={url + "/Purchase02"}>Purchase02</Link> &nbsp;&nbsp;
      <Link to="/Purchase/Purchase03?purchaseName=TV&price=1000">Purchase03</Link>
      &nbsp;&nbsp;
      <Switch>
        <Route path="/Purchase/Purchase01/:purchaseName/:price">
          <Purchase01 />
        </Route>
        <Route path={path + "/Purchase02"}>
          <Purchase02 />
        </Route>
        <Route path={path + "/Purchase03"}>
          <Purchase03 />
        </Route>
        <Route path={path + "/*"}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Purchase;
