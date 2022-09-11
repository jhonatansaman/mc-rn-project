import ProductDescription from "src/components/molecules/Product";
import { IProductDetails } from "./types";

const ProductDetails = ({ productSelected }: IProductDetails) => (
  <ProductDescription product={productSelected} />
);

export default ProductDetails;
