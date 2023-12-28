



//react act as a library div id root not framework which comes with all 
//just piece of code or js .framework axts on app 


// react element is an obect at the end of the day which is using dom root.renderr render method is super powerful to put that object in the page react element into html tag
// create eleemnet api name ,attributes(or objects passed through the tag),children(1st children normal react elememnt,or multiple children use array)

// inside root.render ei jo pass hua root mei jo tha wo replace it up 

// if suppose their is something at top or bottom we can use react in small portion of the page rest baaki sab same rahega




/* <div id="parent">
    <div id="child">
        <h1>"i am h1 tag"</h1>
        <h2>"i am h2 tag"</h2>
    </div>
</div> */




const parent=React.createElement("div",{id:"parent"},[
    React.createElement(
        "div",
        {id:"child"},
    
        [React.createElement("h1",{},"I am in h1 tag"),
        React.createElement("h2",{},"I am in h2 tag")
        ]),

        React.createElement(
            "div",
            {id:"child"},
        
            [React.createElement("h1",{},"I am in h1 tag"),
            React.createElement("h2",{},"I am in h2 tag")
            ]),
]);

console.log(parent);




// const heading= React.createElement("h1",
// {
//     id:"heading",xyz:"abc"
// },
//     "Hello World from React!");

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  // to take this object and put it in root which react understnd  heading is just an object render obejct ko convert karta hai obejct ko h1 tag mei