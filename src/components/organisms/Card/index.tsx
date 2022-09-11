import CardContent from "src/components/molecules/CardContent";
import * as S from "./styles";
import { ICard } from "./types";

const Card = ({ name, url }: ICard) => {
  return (
    <S.Container>
      <CardContent name={name} uri={url} />
    </S.Container>
  );
};

export default Card;
