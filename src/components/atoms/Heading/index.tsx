import { IHeading } from "./types";
import * as S from "./styles";

const Heading = ({ text }: IHeading) => {
  return <S.Text>{text}</S.Text>;
};

export default Heading;
