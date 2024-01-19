import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



const appStore= configureStore({

    reducer:{
        cart:cartReducer,
        // user:userReducer
    }
}


);

export default appStore;


// a reducer can be the combination of many small reducers like in cartSlice
//here reducer is pura app store k liye hai cartReducer multiple component ka ho sakta hai
