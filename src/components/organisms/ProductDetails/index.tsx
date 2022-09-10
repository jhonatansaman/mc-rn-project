import { Button, View } from "react-native";
import { Text } from "src/components/atoms/Heading/styles";
import Modal from "src/components/atoms/Modal";
import ProductDescription from "src/components/molecules/Product";
import { IProductDetails } from "./types";

const ProductDetails = ({
  isShownProductModal,
  onDismissModal,
  productSelected,
}: IProductDetails) => {
  return (
    <Modal isOpen={isShownProductModal} onDismiss={onDismissModal}>
      <ProductDescription
        product={productSelected}
        onDismissModal={onDismissModal}
      />
    </Modal>
  );
};

export default ProductDetails;
