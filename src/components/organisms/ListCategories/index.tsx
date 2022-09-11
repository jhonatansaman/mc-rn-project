import { View } from "react-native";
import Category from "../Category";
import { IListCategories } from "./types";

const ListCategories = ({ data, onSelectProduct }: IListCategories) => (
  <View testID="list_categories_container">
    {data.menus?.map((item, index) => (
      <Category
        key={index.toString()}
        name={item.name}
        items={item.items}
        onSelectProduct={onSelectProduct}
      />
    ))}
  </View>
);
export default ListCategories;
