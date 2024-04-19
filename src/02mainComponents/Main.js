
import React from 'react';
import Main01 from './Main01';
import Main03 from './Main03';
import Main02 from './Main02';
import CommonTop from '../commonComponent/CommonTop';

const Main = () => {

  console.log("Main");

  return (

    <div className="ViewGood">

      {/* <CommonTop/> */}
    
      <Main01/>
      <Main02/>
      <Main03/>
    
    </div>

  );
};

export default Main;