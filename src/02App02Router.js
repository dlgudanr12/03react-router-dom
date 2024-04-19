import './App.css';

import Component01 from "./01components/Component01";
import Component02 from "./01components/Component02";
import Component03 from "./01components/Component03";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "./commonComponent/NotFound";

function App() {
  console.log("App");

  return (
    <div className="ViewGood">
      <h1>React Router Dom Study</h1>
      <h3>a Tag 사용 페이지 전환</h3>
      <a href="/">Component01</a> &nbsp;
      <a href="/Component02">Component02</a> &nbsp;
      <a href="/Component03">Component03</a> &nbsp;
      <br />

      <h3>Link component 사용 페이지 전환</h3>
      <Link to="/">Component01</Link> &nbsp;
      <Link to="/Component02">Component02</Link> &nbsp;
      <Link to="/Component02/Component03">Component03</Link> &nbsp;

      <Route path='/'><Component01/></Route>
      <Route path='/Component02'><Component02/></Route>
      <Route path='/Component02/Component03'><Component03/></Route>
 {/* 
      <Switch>
        <Route path='/'><Component01/></Route>
        <Route path='/Component02'><Component02/></Route>
        <Route path='/Component02/Component03'><Component03/></Route>
        <Route path='*'><NotFound/></Route>
      </Switch>*/}
    </div>
  );
}

export default App;
