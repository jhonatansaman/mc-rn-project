import { Product } from "../ProductDetails/types";

export interface ICategory {
  name: string;
  items: Product[];
  onSelectProduct: (param: Product) => void;
}

export type RenderItem = {
  item: Product;
  index: number;
};
