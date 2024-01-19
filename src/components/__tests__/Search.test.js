// import { render, screen,fireEvent } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
// import Body from "../Body"
// import MOCK_DATA from "../mocks/mockResListData.json"
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom"


// global.fetch=jest.fn(()=>{
//     return Promise.resolve({
//         json:()=>{
//             return Promise.resolve(MOCK_DATA);
//         }
//     });

    


// });

// it("Should search Res List for ice-Cream as text input",async()=>{
//     await act(async ()=>
//     render(
//     <BrowserRouter>
//       <Body/>
//     </BrowserRouter>)
    
//     );



// const cardsBeforeSearch=screen.getAllByTestId("resCard");

//     expect (cardsBeforeSearch.length).toBe(20);

//     const searchBtn =screen.getByRole("button",{name:"Search"});

//     const searchInput =screen.getByTestId("searchInput");


//     fireEvent.change(searchInput,{target:{value:"Ice"}});

//     fireEvent.click(searchBtn);

//     // expect(searchBtn).toBeInTheDocument();

//     //screen should load 4 res cards

//     const cardsAfterSearch=screen.getAllByTestId("resCard");

//     expect(cardsAfterSearch.length).toBe(20);


// })


// it("Should dislay the top rated rsturants",async()=>{
//     await act(async ()=>
//     render(
//     <BrowserRouter>
//       <Body/>
//     </BrowserRouter>)
    
//     );



// const cardsBeforeFilter=screen.getAllByTestId("resCard");

//     expect (cardsBeforeFilter.length).toBe(20);

//     const topRatedBtn =screen.getByRole("button",{name:"Top rated restaurants"});

   

//     fireEvent.click(topRatedBtn);

//     // expect(searchBtn).toBeInTheDocument();

//     //screen should load 4 res cards

//     const cardsAfterFilter=screen.getAllByTestId("resCard");

//     expect(cardsAfterFilter.length).toBe(14);


// })