import { Product, ProductResponse } from "../ProductDetails/types";

export interface IListCategories {
  data: ProductResponse;
  onSelectProduct: (param: Product) => void;
}
