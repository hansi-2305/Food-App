import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";

import {useState,useEffect,useContext} from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body=()=>{

    const [listOfRestaurants,setListOfRestaurant]=useState([]); //whatever we pass in useState bcom a default value of lhs

    const [searchText,setSearchText]=useState("");
    const[ filteredRestaurant,setFilteredRestaurant]=useState([]);


    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // console.log("List of Rest -",listOfRestaurants);
    useEffect(()=>{
        // console.log("use effect called");
        fetchData();

    },[]);

    const  fetchData= async ()=>{
        const data=await fetch(
            // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5927602&lng=88.3385318&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5927602&lng=88.3385318&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5927602&lng=88.3385318&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        // console.log(json);

    //optional chainging

        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("hello",listOfRestaurants);
        

    };

    const onlineStatus =useOnlineStatus();

    if(onlineStatus === false)
    {
        return <h1>Look's like you are offline!! please check your internet connection</h1>
    }

    const { loggedInUser,setUserName }= useContext(UserContext);

    

    // console.log("body rendered"); // called first

    return listOfRestaurants.length === 0 ?<Shimmer/> :
    (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                    // data-testid="searchInput"
                    type="text" 
                    className="border border-solid border-black" 
                    value={searchText}  
                    onChange={(e)=>{

                        console.log("hi");
                            setSearchText(e.target.value)
                        }      
                    }
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{

                            const filteredList=listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            ); 

                            // console.log("helloo",listOfRestaurants);
                            // console.log("VALUE IS CHANGED");

                            setFilteredRestaurant(filteredList);

                    }}>
                        Search

                    </button>
                    
                </div>

            

                <div className=" search m-4 p-4 flex items-center">
                <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={() => {
                     //Filter logic here
                        const filteredList=listOfRestaurants.filter(
                            (res) => res.info.avgRating >4.2
                        ); 

                        // console.log("helloo",listOfRestaurants);
                        console.log("VALUE IS CHANGED");

                        setFilteredRestaurant(filteredList);

                       
                    }}    
                >
                        Top rated restaurants
                </button>
                </div>

                <div className=" search m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input className="border border-black p-2"
                    value={loggedInUser}
                     onChange={(e)=>setUserName(e.target.value)}/>
                    
                </div>

                
                    
                
                
            </div>
            <div className="flex flex-wrap ">
                { 
                    
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>

                            {/* if my restaurant is promoted make  higher order card for it */}


                       <RestaurantCard resData={restaurant}/>
                       </Link>
                    ))

                }            
            </div>


        </div>
    )
};

export default Body;


