import LoadingMenu from "src/components/molecules/Product/LoadingMenu";
import Header from "src/components/organisms/Header";
import ListCategories from "src/components/organisms/ListCategories";
import { Product } from "src/components/organisms/ProductDetails/types";
import { navigateScreen } from "src/helpers/navigationService";
import { Screen } from "src/helpers/types";
import useMenu from "src/hooks/useMenu";
import * as S from "./styles";

const Menu = () => {
  const { data, isLoading } = useMenu();

  const onSelectProduct = (product: Product) => {
    navigateScreen(Screen.PRODUCT_MODAL, { product });
  };

  return (
    <S.Container testID="menu_container">
      <Header />
      <S.Content>
        {isLoading ? (
          <LoadingMenu />
        ) : (
          data && (
            <ListCategories data={data} onSelectProduct={onSelectProduct} />
          )
        )}
      </S.Content>
    </S.Container>
  );
};

export default Menu;
