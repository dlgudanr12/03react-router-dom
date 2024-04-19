
import React from 'react';
import User01 from './User01';
import User02 from './User02';
import User03 from './User03';
import CommonTop from '../commonComponent/CommonTop';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const User = () => {

  console.log("User");
  return (

    <div className="ViewGood">

      
        {/* <CommonTop/> */}
      

      <User01/>
      <User02/>
      <User03/>
    
    </div>

  );
};

export default User;