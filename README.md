#Namaste React

#parcel

-Dev Build
-Local Server
-HMR =Hot Module Replacement
-File watching algorithm written in c++
-caching- Faster builds
-Image optimisation
-Minification of file
-Bundling
-Compressing
-Consistent hashing'-code splitting
-differntial bunding - support older browsers
-dignostics
- error handling
- https
-tree shaking -remove unused code 
- different dev and prod bundles


/** Namsr=te food
 * header
 * -logo
 * -nav items
 * body
 * -Search input
 * -restaurant container
 *  -restaurant card
 *  -image
 *  -img
 *  -cuisines ,name of rest,star,delevery time
 * Footer
 * -copyright
 * -links
 * -address
 * -contact

*/


# 2 types ROUTING in web apps
- client side routing  one page only components c=are changing
- server site routing


-dyanmic routing works

# REDUX TOOLKIT

-Install @reduxJs/ toolkit and react-redux

-build our store
-connect our store to our app
-Slice (cartSlice)
-dispatch(action)
-Selector

# types of testing (developer)
-unit testing
-Integration testing
-End to End Testing -e2e testing


# Setting up Testing in our app
-Install React Testig Library
-Installed Babel dependencies
-Configure babel
-Configure Parcel Config file to disable default babel transplation
-Jest configuration i.e -npx jest --init
- Install jsdom library
-Install @babel/preset-react to make jsx work in test cases
-Include @babel/preset-react inside my bael conflict
-Install npm i -D @testing-library/jest-dom





//babel is a transpiler which converts the code from one form to another
presets convert jsx to html so that it can read properly



// import {screen, render,fireEvent} from "@testing-library/react"
// import Body from "../Body";
// import MOCK_DATA from "../mocks/MockResListData.json"
// import { act } from "react-dom/test-utils";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";

// // dummy global  mock this funtcion
// global.fetch = jest.fn(()=>{
//     return Promise.resolve({
//         json:()=>{
//             return Promise.resolve(MOCK_DATA);
//         }
//     })
// });


// it("Should render the body component with search ",async()=>{


//     // render(<Body/>)

//     await act(async() =>
//      render(
//      <BrowserRouter>
//         <Body/>
//      </BrowserRouter>
//      )
//     );



// const searchBtn= screen.getByRole("button",{name:"Search"});
// // console.log(searchBtn);

// const searchInput=search.getByTestId("searchInput");


// fireEvent.change(searchInput,{target:{value:"burger"}});

// fireEvent.click(serchBtn);
// // Console.log(searchInput);

// expect(searchBtn).toBeInTheDocument();

// });




// //fetch superpower is given by browser it here we are testing in jsDom which do understand it therefore we have to mock fetch fucntion
// //on saving yeh apne hote jaayega
// //whenever u are using state updates or fetch wrap it under act method



