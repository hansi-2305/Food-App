import { useContext } from "react";

import {CDN_URL} from "../utils/constants";  // form named import we are using curly brackets

import UserContext from "../utils/UserContext";




const RestaurantCard=(props)=>{
    // console.log(props);
    const{resData}=props;

    
    // const{loggedInUser}=useContext(UserContext);
    const {loggedInUser} = useContext(UserContext);




    return(
        <div 
        data-testid="resCard" 
        className="m-4 p-4 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-300" 
        >
            
            <img className="rounded-lg"  src={CDN_URL+resData.info.cloudinaryImageId} alt="res-logo" />

            <h3 className="font-bold py-4 text-lg text-wrap">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.deliveryTime}minutes</h4>
            <h4>User:{loggedInUser}</h4>
        </div>

    );

};

//Highr order componet

//input - Restaurantcard => RestaurantCardPromoted

//  export const withPromotedLabel =(RestaurnatCard) =>{
//     return (props) =>{

//         return (
//             <div>
//                 <label className="absolute">Promoted</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }
// }


export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return(
          <div>
  
              <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                  Promoted
              </label>
              <RestaurantCard {...props}/>
          
          </div>
      );
    };
  };
export default RestaurantCard;

//props drilling problem of passing props 
//react context
// contest is a global thing
// 
