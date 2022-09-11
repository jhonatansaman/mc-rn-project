import * as S from "./styles";
import Logo from "src/assets/images/logo.png";
import { IHeader } from "./types";

const Header = () => {
  return (
    <S.Container>
      <S.Logo source={Logo} />
    </S.Container>
  );
};

export default Header;
