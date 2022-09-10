import { Modal as ModalRN } from "react-native";
import { IModal } from "./types";

const Modal = ({ children, isOpen, onDismiss }: IModal) => {
  return (
    <ModalRN
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onDismiss}
    >
      {children}
    </ModalRN>
  );
};

export default Modal;
