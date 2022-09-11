import ProductDetails from "src/components/organisms/ProductDetails";
import { Props } from "./types";

const ProductModal = ({ route: { params } }: Props) => {
  const { product } = params;

  return <ProductDetails productSelected={product} />;
};

export default ProductModal;
