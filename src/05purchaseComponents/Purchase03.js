import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Purchase03 = () => {
  console.log("Purchase03");
  const{search}=useLocation();
  console.log(search);
  const abc=new URLSearchParams(search);
  console.log(abc.get("purchaseName"));
  console.log(abc.get("price"));

  return (
    <div className="ViewGood">
      <h2>Purchase03</h2>
      Purchase03...
      <br />
      <br />
      구매상품 : {abc.get("purchaseName")}
      <br />
      <br />
      구매가격 : {abc.get("price")}
    </div>
  );
};

export default Purchase03;
