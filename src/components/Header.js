// import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";

import {LOGO_URL} from "../utils/constants";
import {useState,useContext} from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



 export const Header=()=>{

    // let btnName="Login"
    const [btnNameReact,setbtNameReact] = useState("Login");

    const onlineStatus =useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log("HIII",data);

//global boject type pf







// subscribing to the store using the selector

const cartItems=useSelector((store)=>store.cart.items);









    return(
         <div className="flex justify-between bg-pink-100 shadow-lg mb-2  sm:bg-yellow-50 lg:bg-green-50" >
             <div className="logo-container">
                 <img className="w-56"src={LOGO_URL}/>  
             </div>
             <div className="flex items-center ">
                 <ul className="flex  p-4 m-4 ">
                    <li className="px-4">
                        Online status:{onlineStatus ?  "🟢": "🔴"}
                    </li>
                     <li className="px-4">
                     <Link to="/">Home</Link>
                     </li>
                     {/* <li>
                        <a href="/about">ABOUT US</a>
                     </li> */}
                     {/* <li>About</li> */}

                     <li className="px-4">
                        <Link to="/about">About Us</Link>
                     </li>
                     <li className="px-4">
                     <Link to="/contact">Contact Us</Link>
                     </li>

                     <li className="px-4">
                     <Link to="/grocery">Grocery</Link>
                     </li>
                       

                     <li className="px-4 font-bold text-xl">
                     <Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                     <button className="login" onClick={()=>{
                        // btnNameReact="LogOut";
                        
                        btnNameReact==="Login" ? setbtNameReact("LogOut"):setbtNameReact("Login");//terniary operator (condn)?a:b
                        console.log(btnNameReact);
                     }}>
                        {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                 </ul>
 
             </div>
         </div>
     );
 };

 export default Header;

