import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const NotFound=()=>{
    console.log("NotFound");

    const location=useLocation();
    return(
        <div className="ViewGood">
            <h3>
                요청하신 Page 존재하지 않습니다. <code>{location.pathname}</code>
            </h3>
        </div>
    );
};

export default NotFound;