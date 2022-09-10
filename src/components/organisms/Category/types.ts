import { Product } from "src/components/molecules/Products/types";

export interface ICategory {
  name: string;
  items: Product[];
  onSelectProduct: (param: Product) => void;
}

export type RenderItem = {
  item: Product;
};
