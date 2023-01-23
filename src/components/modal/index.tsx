import ReactModal from "react-modal";
import { Container } from "./styles.js";
import { ReactNode } from "react";

interface ModalProps {
  modalOpen: boolean;
  SetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export function Modal({ modalOpen, SetModalOpen, children }: ModalProps) {
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => SetModalOpen(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          background: "#00000039",
          backdropFilter: "blur(2px)",
    
        },
        content: {
          border: "none",
          width: "46.875rem",
          margin: "calc(15vh) auto",
          height: "fit-content",
          background: "var(--background)",
          boxShadow: "0.4rem 0.4em .5em .3em rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Container>{children}</Container>
    </ReactModal>
  );
}
