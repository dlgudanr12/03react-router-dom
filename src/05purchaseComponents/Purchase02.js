import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Purchase02 = () => {
  console.log("Purchase02");
  return (
    <div className="ViewGood">
      <h2>Purchase02</h2>
      Purchase02...
      <br />
      <br />
      <Link to='/'>Main</Link> &nbsp;&nbsp;
      <Link to='/Purchase/Purchase01'>Purchase01:URL parameters 값 없을 때...</Link> &nbsp;&nbsp;
      <Link to='/Purchase/Purchase03'>Purchase03:URL QueryString 값 없을 때...</Link> &nbsp;&nbsp;
    </div>
  );
};

export default Purchase02;
