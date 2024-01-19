import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";



// instead of test we can also write it

// Here we have many testcase so we can group it together

describe("Contact Us Page Test Case", ()=>{

    beforeAll(()=>{

        // console.log("beforeAll");  //sabse pehle

    })
    afterAll(()=>{
        // console.log("After ALL")  //sabk end hone pe
    })
    beforeEach(()=>{
        // console.log("Before Each");   //har test case k pehle wo chalega
    })

    afterEach(()=>{
        // console.log("After Each")  //after each test case
    });

    it("should load contact us component",()=>{

        render(<Contact/>); //render on jsdom
    
     const heading = screen.getByRole("heading");  //finds all the heading components
    
    
    //  assertion
     expect(heading).toBeInTheDocument(); //check whehther my heading was in the document or not
    
    });


    test("should load button  component",()=>{

        render(<Contact/>); //render on jsdom
    
     const button = screen.getByRole("button");  //finds all the heading components
    //  const button = screen.getByText("Submit");  //passed
    //  const button = screen.getByText("Random"); //unable to find text random
    
    //  assertion
     expect(button).toBeInTheDocument(); //check whehther my button was in the document or not
    
    });
    
    test("should load input name inside contact component",()=>{
    
        render(<Contact/>); //render on jsdom
    
     const inputName = screen.getByPlaceholderText("name");  //finds all the name s placeholder
    
    
    //  assertion
     expect(inputName).toBeInTheDocument(); //check whehther my placeholder with input name was in the document or not
    
    });
    
    test("should load 2 input boxes on the contact component",()=>{
    
        render(<Contact/>);
    
    
        //quering
        // const inputBoxes=screen.getByRole("input");//here input is wrong do textbox instead;
        const inputBoxes=screen.getAllByRole("textbox"); ///if multiple then use ALL   //react elemntjsx virtual dom
    
        // console.log(inputBoxes);
    
        //Assertion
    
        expect(inputBoxes.length)
    .toBe(2);  //when 2 then fine but any other number isinvalid
        // expect(inputBoxes).toBeInTheDocument();
    
    });


});






