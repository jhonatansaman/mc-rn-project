import { useQuery } from "react-query";
import { getMockedNavigateScreen } from "src/config/jest";
import { Screen } from "src/helpers/types";
import { mockMenu } from "src/utils/constants";
import { fireEvent, render } from "src/utils/customRender";
import Menu from ".";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({ data: null, isLoading: true }),
}));

const useQueryMock = useQuery as jest.Mock;

const mockedNavigateScreen = getMockedNavigateScreen();

describe("Menu screen", () => {
  it("Should render Menu Screen", () => {
    const { findByTestId } = render(<Menu />);
    expect(findByTestId("menu_container")).toBeDefined();
  });

  it("Should render Loading Menu when loading is true ", () => {
    const { findByTestId } = render(<Menu />);
    expect(findByTestId("loading_menu_container")).toBeDefined();
  });

  it("Should render Categories when there is data and loading is false ", () => {
    useQueryMock.mockImplementation(() => ({
      data: mockMenu,
      isLoading: false,
    }));

    const { findByTestId } = render(<Menu />);
    expect(findByTestId("list_categories_container")).toBeDefined();
  });

  it("Should render product on modal when press card product", async () => {
    useQueryMock.mockImplementation(() => ({
      data: mockMenu,
      isLoading: false,
    }));

    const { findByTestId } = render(<Menu />);

    const card = await findByTestId("hot_chocolate_0");
    fireEvent.press(card);
    const product = mockMenu.menus[0].items[0];

    expect(mockedNavigateScreen).toHaveBeenCalledWith(Screen.PRODUCT_MODAL, {
      product,
    });
  });
});
