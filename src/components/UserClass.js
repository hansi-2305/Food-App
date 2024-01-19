import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
       

        this.state={

            userInfo:{
                name:"dummy",
                location:"default location"
            }
           
        };
        console.log("Child constructor");
    }


    async componentDidMount() {   //make it async to call a api

        console.log("Child component did mount"); 
        
        
        
        // after child render it is called
    //api call

    const data = await fetch(" https://api.github.com/users/hansi-2305");

    const json = await data.json();

    this.setState({
        userInfo :json,

    });


    console.log(json);

    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component will unmount"); //jab page se data gayab ho jaata like jab humlog about page se contact page mei shift karte tab
    }

    render() {

        const {name,location}=this.state.userInfo;
       

        console.log( "Child-render");


        return (
            <div className="user-card">
            
                <h1>Nmae: {name}</h1>
                <h2>Location:{location}</h2>
               
            </div>
        );
    }
}

export default UserClass;


// class based component is nothing but a js class that renders and give jsx element
//normal functional component is a js function that return jsx elelemnt

//when i am loading the class based compoenet sit means we creating an instance of a class and whenever we are creating an instance of class contructor is called
//this is the best way to create state varible


//how is the class based components mountained on to the web page

//a bout us parent class hai wo kine by line will render and as soon as it fount userclass then it start loading class based components
//* class based components call hote instance of the class is created hereby contructor is called
//* first contructor is called and then render is called

//parent constructor
//parent render
//child constructor
//child render
//child component did mount
//parent component did mount

//api call is made under componnet did mount(just like use effect)
// render te component once -> make an api call  ->and then fill d data inside the component
//we dont want the api to wait for the component to fill it



/****
 * 
 * -----MOUNTING
 * 
 * Constructor (dummy)
 * Render(dummy)
 *    <HTML Dummy>
 * 
 * Component Did Mount
 *    <API call>
 *    <this.setState>  -> sate variable is updted
 * 
 * --UPDATE CYCLE----
 *    render (API data)
 *    HTML (new API data)
 *    component get update
 * 
 * ---UNMOUNTING
 * 
 
 */
