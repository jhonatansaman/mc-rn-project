import { Button, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "src/components/atoms/Card";
import Heading from "src/components/atoms/Heading";
import { Product } from "../ProductDetails/types";
import * as S from "./styles";
import { ICategory, RenderItem } from "./types";

const renderItem =
  (onSelectProduct: (param: Product) => void) =>
  ({ item }: RenderItem) =>
    (
      <TouchableOpacity onPress={() => onSelectProduct(item)}>
        <Card
          key={item.url}
          url={item.url}
          price={item.price}
          name={item.name}
          description={item.description}
        />
      </TouchableOpacity>
    );

const Category = ({ name, items, onSelectProduct }: ICategory) => {
  return (
    <S.Container>
      <Heading text={name} />
      <S.Content>
        <FlatList
          data={items}
          keyExtractor={(item) => item.url}
          horizontal
          ItemSeparatorComponent={() => <S.ItemSeparator />}
          renderItem={renderItem(onSelectProduct)}
        />
      </S.Content>
    </S.Container>
  );
};

export default Category;
