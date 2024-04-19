
import React from 'react';
import CommonTop from '../commonComponent/CommonTop';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Product01 from './Product01';
import Product02 from './Product02';
import Product03 from './Product03';
import NotFound from '../commonComponent/NotFound';

const Product = () => {

  console.log("Product");
  let{path,url}=useRouteMatch();
  
  console.log(path);
  console.log(url);

  return (

    <div className="ViewGood">

      
        {/* <CommonTop/> */}
      <Link to='/product/product01'>Product01</Link> &nbsp;&nbsp;
      <Link to={url+'/product02'}>Product02</Link> &nbsp;&nbsp;
      <Link to={url+'/product03'}>Product03</Link> &nbsp;&nbsp;

      <Switch>
        <Route path={path+'/product01'}><Product01/></Route>
        <Route path='/product/product02'><Product02/></Route>
        <Route path={path+'/product03'}><Product03/></Route>
        <Route path={path+'/*'}><NotFound/></Route>
      </Switch>
    
    </div>

  );
};

export default Product;