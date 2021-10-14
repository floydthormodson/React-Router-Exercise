import Product from "./Product";
import {Route,Link} from "react-router-dom";

export default function ProductHome({match}){
    return(
        <div>
            <br/>
            <br/>
            <h1>This is the Page for all our Products</h1>
            <br />
            <h2><Link to={`${match.url}/Product`}>Product</Link></h2>
            <div>
                <Route path={`${match.url}/Product`} component={Product}/>
            </div>
        </div>
    )
}