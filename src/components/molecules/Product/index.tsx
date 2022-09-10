import * as S from "./styles";
import { IProductDescription } from "./types";

const ProductDescription = ({
  product,
  onDismissModal,
}: IProductDescription) => {
  return (
    <S.Container>
      <S.Image source={{ uri: product?.url }} />
      <S.Title>{product?.name}</S.Title>
      <S.PriceBox>
        <S.Price>${product?.price}</S.Price>
      </S.PriceBox>
      <S.Description>{product?.description}</S.Description>
      <S.ButtonBox onPress={onDismissModal}>
        <S.ButtonText>Close</S.ButtonText>
      </S.ButtonBox>
    </S.Container>
  );
};

export default ProductDescription;
