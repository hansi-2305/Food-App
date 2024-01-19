
import { createSlice } from "@reduxjs/toolkit"


const cartSlice=createSlice({

    name:'cart',
    initialState:{
        items:[],  //cartItem
        // console.log(items);
    },
    reducers:{
        addItem:(state,action)=>{

            //we are mutating the state over here
            state.items.push(action.payload);

        },
        removeItem:(state)=>{
            state.items.pop();
        },

        // originalState={items:["pizza"]}
        clearCart:(state,action)=>{

            // console.log(state); //pizzaa
            // console.log(current())
            // state=[];  // this will not change the original state 
            // console.log(state);  //[]


            //RTK- either mutate the existing state or return a nwe state
            // state.items.length=0; //originalState=[]
            return {items:[]}; //pass it to original cart or this new[] will be replaced inside originalState=[]
        },
    },
});




export const{addItem,reomveItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;

//redux toolkit - we have to mutate the state and no need to retunr not in older version we can't mutate the state and return is mandatory behind the scene abhi wahi ho raha h per immer use kaete hai behind the seen

//redux helps in data layer
//redux toolkit learn about rtk query quick start 