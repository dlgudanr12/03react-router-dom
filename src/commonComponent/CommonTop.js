import { Link } from "react-router-dom/cjs/react-router-dom.min"

const CommonTop=()=>{
    console.log("CommonTop")

    return(
        <div className="ViewGood">
            <Link to='/'>Main</Link>
            &nbsp; &nbsp;
            <Link to='/User'>User</Link>
            &nbsp; &nbsp;
            <Link to='/Product'>Product</Link>
            &nbsp; &nbsp;
            <Link to='/Purchase'>Purchase</Link>
            &nbsp; &nbsp;
            <Link to='/Etc'>Etc</Link>
        </div>
    );
};

export default CommonTop;