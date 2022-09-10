import * as S from "./styles";
import Logo from "src/assets/images/logo.png";
import { IHeader } from "./types";

const Header = ({ isOpacity }: IHeader) => {
  return (
    <S.Container opacityBackground={isOpacity}>
      <S.Logo source={Logo} />
    </S.Container>
  );
};

export default Header;
