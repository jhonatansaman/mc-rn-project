import { ICardContent } from "./types";
import * as S from "./styles";

const CardContent = ({ uri, name }: ICardContent) => {
  return (
    <>
      <S.Image source={{ uri }} resizeMode={"contain"} />
      <S.Description>{name}</S.Description>
    </>
  );
};

export default CardContent;
