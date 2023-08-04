import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

const ModalContainer = styled(Dialog.Content, {
  display: "flex",
  gap: 16,
  flexDirection: "column",
  position: "fixed",
  minWidth: "40rem",
  padding: "2rem",
  background: "$white",
  borderRadius: 16,
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
});

const ModalTitle = styled(Dialog.Title, {});

const ModalContent = styled(Dialog.Description, {});

const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  top: 16,
  right: 16,
  cursor: "pointer",
  background: "transparent",
  border: "none",
});

const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.75)",
});

export { Overlay, ModalContainer, CloseButton, ModalTitle, ModalContent };
