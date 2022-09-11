import * as SCard from "src/components/organisms/Card/styles";
import Skeleton from "src/components/atoms/Skeleton";
import * as SCategory from "src/components/organisms/Category/styles";
import * as S from "./styles";

const LoadingMenu = () => (
  <S.Container testID="loading_menu_container">
    {Array.from({ length: 3 }).map((_, index) => (
      <SCategory.Container key={index.toString()}>
        <Skeleton width={100} height={25} />
        <SCategory.Content>
          {Array.from({ length: 3 }).map((_, key) => (
            <S.Content key={key}>
              <SCard.Container>
                <Skeleton width={"80%"} height={80} />
                <Skeleton width={"80%"} height={15} />
              </SCard.Container>
              <SCategory.ItemSeparator />
            </S.Content>
          ))}
        </SCategory.Content>
      </SCategory.Container>
    ))}
  </S.Container>
);

export default LoadingMenu;
