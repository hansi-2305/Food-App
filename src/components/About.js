import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor(props)
    {
        super(props);

        //console.log("Parent Constructor");

    }


    componentDidMount() {
        // console.log("Parent component did mount");     // after parent render it is called
    }
    render(){

        console.log("Parent-render");
        return (

            
            <div>
                <h1>About</h1>

                <div>
                    LoggedIn User
                    <UserContext.Consumer >
                        {/* {(data)=> console.log ("HELLOO",data)} */}

                        {({LoggedInUser})=><h1 className="text-el  font-bold">{LoggedInUser}</h1>}


                    </UserContext.Consumer>
                </div>

                <h2>This is Namaste React webseries</h2>
                {/* <User name={"Hanshika Agarwal (function)"}/> */}


                <UserClass name={"First"} location={"Deharadhun"}/>
                
                               
            </div>

        )
    }
}









// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React webseries</h2>
//             {/* <User name={"Hanshika Agarwal (function)"}/> */}


//             <UserClass name={"Hanshika Agarwal(class)"} location={"Deharadhun class"}/>
//         </div>
//     );
// };

export default About;

/*

-parent constructor
-parent render
  -hanshika constructor
  -hanshika render
  -hanshika compo mount

  -elon constr
  -elon render
  -elon compo mount

-parent mount

*/

/* Ryt way 


-parent constructor
-parent render

 -firstchild constructor
 -firsrchild render

 -secondchild construtor
 -secondchild render

 <DOM UPDATED - IN SINGLE BATCH>

 -firstchild componet did mount
 -secondchild component did mount

-parent component did mount




*/

// project .wojtekmaj.pl/react-lifecycle-methods-digram/
