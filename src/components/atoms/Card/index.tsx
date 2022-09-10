import * as S from "./styles";
import { ICard } from "./types";

const Card = ({ name, url }: ICard) => {
  return (
    <S.Container>
      <S.Image source={{ uri: url }} />
      <S.Description>{name}</S.Description>
    </S.Container>
  );
};

export default Card;
