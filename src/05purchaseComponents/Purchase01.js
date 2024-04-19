import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Purchase01 = () => {
  console.log("Purchase01");
  let { purchaseName, price } = useParams();
  console.log(purchaseName, price);

  let params = useParams();
  console.log(params);
  return (
    <div className="ViewGood">
      <h2>Purchase01</h2>
      <br />
      <br />
      구매상품 : {purchaseName}
      <br />
      구매상품 : {params.purchaseName}
      <br />
      <br />
      구매가격 : {price}
      <br />
      구매가격 : {params.price}
    </div>
  );
};

export default Purchase01;
