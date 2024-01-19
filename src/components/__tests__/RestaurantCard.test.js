import { screen,render} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render RestaurantCard component with props data",()=>{

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name=screen.getByText("Grameen Kulfi");

    expect(name).toBeInTheDocument();
})

it("should render ResCard component with promoted label",()=>{


    //home work
})