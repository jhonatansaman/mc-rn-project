import * as S from "./styles";
import { IProductDescription } from "./types";

const ProductDescription = ({ product }: IProductDescription) => (
  <S.Container>
    <S.Image source={{ uri: product?.url }} />
    <S.Title testID="product_description_name">{product?.name}</S.Title>
    <S.PriceBox>
      <S.Price testID="product_description_price">${product?.price}</S.Price>
    </S.PriceBox>
    <S.Description testID="product_description_description">
      {product?.description}
    </S.Description>
  </S.Container>
);

export default ProductDescription;
