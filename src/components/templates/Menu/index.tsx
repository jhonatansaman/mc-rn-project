import { useState } from "react";
import { Text } from "react-native";
import Category from "src/components/organisms/Category";
import Header from "src/components/organisms/Header";
import ProductDetails from "src/components/organisms/ProductDetails";
import { Product } from "src/components/organisms/ProductDetails/types";
import useMenu from "src/hooks/useMenu";
import * as S from "./styles";

const Menu = () => {
  const { data, isLoading } = useMenu();
  const [isShownProductModal, setIsShownProductModal] = useState(false);
  const [productSelected, setProductSelected] = useState<Product | null>(null);

  const onSelectProduct = (product: Product) => {
    setProductSelected(product);
    setIsShownProductModal(true);
  };

  const onDismissModal = () => setIsShownProductModal(false);

  return (
    <S.Container opacityBackground={isShownProductModal}>
      <Header isOpacity={isShownProductModal} />
      {isLoading && <Text>Loading...</Text>}
      <S.Content>
        {data &&
          data.menus.map((item, index) => (
            <Category
              key={index.toString()}
              name={item.name}
              items={item.items}
              onSelectProduct={onSelectProduct}
            />
          ))}
      </S.Content>
      <ProductDetails
        productSelected={productSelected}
        onDismissModal={onDismissModal}
        isShownProductModal={isShownProductModal}
      />
    </S.Container>
  );
};

export default Menu;
