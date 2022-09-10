import { Product } from "src/components/organisms/ProductDetails/types";

export interface IProductDescription {
  product: Product | null;
  onDismissModal: () => void;
}
