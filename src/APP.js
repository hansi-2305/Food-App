import React, { lazy,Suspense,useState,useEffect} from "react";
// import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";

// import {Header} from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// import RestaurantCard from "./components/RestaurantCard";

import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom"; // router provider is providing the 
import UserContext from "./utils/UserContext";
import About from "./components/About";  
import { Provider } from "react-redux";   //providing ka kaam kar raha
import appStore from "./utils/appStore";




// import Grocery from "./components/Grocery";


//Chunking
//Code Splitiing
//Dynamic Bundling
// Lazy loading = loading the page when required
//on demand loading

const Grocery = lazy(()=> import ("./components/Grocery"));


const AppLayout = ()=>{


    //authentication
    
    const[userName,setUserName]=useState();
    useEffect (() => {
        //make an api call
        const data={
            name:"Akshay"
        }

        setUserName(data.name);
    },[]);

    
    return(

        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName ,setUserName}}>   

            <div className="app">

                 <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>,
        },
        {
            path:"/about",
            element:<About/>,
            
        
        },
        {
            path:"/contact",
            element:<Contact/>,
            
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>,
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loding...</h1>}>
                <Grocery/>
                </Suspense> 

            // element:<Grocery/>
        },
        {
            path:"/cart",
            element:<Cart/>,
        },
        

    ],
    errorElement:<Error/>,
},


]);

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />); // takes the object convert to html push it in browser hanshika is here get converted to react k andar jo tha usey 

root.render(<RouterProvider router={appRouter}/>);


//createbroweser router recomends

            {/** if my path is =/ */}
            //<Body/>
            {/**if my path is =/about  */}
           // <About/>
            {/**if my path is =/contact  */}

//never use a anchor tag in react  in react we can navgate to new page without reloqading the whole page



//class based ccomponents