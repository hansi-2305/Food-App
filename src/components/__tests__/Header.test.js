import { screen,render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom"; //bcoz link is routerdom facility
import "@testing-library/jest-dom";

it("Should load header component with a login button",()=>{

    render(
    <BrowserRouter>
        < Provider store={appStore}>

           <Header/>

        </Provider>
    </BrowserRouter>
    
    );

    // const loginButton=screen.getByRole("button");  //preferred way 
    const loginButton=screen.getByRole("button" ,{name:"Login"});   //more precised if more button are thre

    // const loginButton=screen.getByText("Login");


    expect(loginButton).toBeInTheDocument();
});




it("Should render header component with cart ",()=>{

    render(
    <BrowserRouter>
        < Provider store={appStore}>

           <Header/>

        </Provider>
    </BrowserRouter>
    
    );

//if exact vlue is given
    // const cartItems=screen.getByText("Cart - (0 items)"); 
    
    //if exact value not required
    const cartItems=screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})



it("Should change login button to logout on click ",()=>{

    render(
    <BrowserRouter>
        < Provider store={appStore}>

           <Header/>

        </Provider>
    </BrowserRouter>
    
    );

    // const loginButton=screen.getByRole("button");  //preferred way 
    const loginButton=screen.getByRole("button" ,{name:"Login"});   //more precised if more button are thre

    // const loginButton=screen.getByText("Login");

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"LogOut"});


    expect(logoutButton).toBeInTheDocument();

});