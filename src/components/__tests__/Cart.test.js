import { render, screen ,fireEvent} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA_NAME);
        }
    });
});




it("Should search Res List for ice-Cream as text input",async()=>{
    await act(async ()=>
    render(
        <Provider store={appStore}>
            <RestaurantMenu/>
        </Provider>

      
    ));

    const accordionHeader= screen.getByText("Recommended(16)");
    fireEvent.click(accordionHeader);

        screen.getAllByTestId("foodItems");

        expect(screen.getAllByTestId("foodItems")).toBe(16);

});