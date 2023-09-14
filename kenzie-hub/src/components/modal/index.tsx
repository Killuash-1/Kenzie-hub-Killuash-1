import React from "react";
import { DivModal } from "./style";
import { iUserTechPost } from "../../services/UserTechPost";


interface ModalProps{
  children?: React.ReactNode;
 
}
interface ModalFormProps{
  children?: React.ReactNode
  onSubmit: () => Promise<void>

}
export default function Modal({children}: ModalProps) {
 
  return (
      <DivModal>

         {children}
  
      </DivModal>
  );
}

Modal.Header = function ModalHeader({children}: ModalProps){
  return <div className="header_modal">{children}</div>
};

Modal.Body = function ModalBody({children, onSubmit}: ModalFormProps){
  return <form className="form_modal" onSubmit={onSubmit}>{children}</form>
};

Modal.Footer = function ModalFooter({children}: ModalProps){
  return <div className="footer_modal">{children}</div>
}