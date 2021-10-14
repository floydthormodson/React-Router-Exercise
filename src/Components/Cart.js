import Checkout from "./Checkout.js";
import {Route, Link} from "react-router-dom";

export default function Cart({match}){
    return(
        <div>
            <br />
            <br />
            <h1>This is the Cart Page</h1>
            <br />
            <Link to={`/Checkout`} >Go to Checkout</Link>

            <Route path={`${match.url}/Checkout`} component={Checkout}/>
          
        </div>
    )
}