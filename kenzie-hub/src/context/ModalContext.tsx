import { createContext, useState } from "react";
import { iUserTechPost } from "../services/UserTechPost";

interface iModalHandling{

  children: React.ReactNode
}
interface iModalContext{
  modal: boolean
  updateModal: boolean
  toggleModal: () => void
  toggleUpdateModal: (tech?: iUserTechPost) => void
  techUpdate: iUserTechPost | undefined
}

export const ModalContext = createContext({} as iModalContext);

const ModalHandling = ({ children }: iModalHandling) => {
  const [ modal, setModal ] = useState<boolean>(false);
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [ techUpdate, setTechUpdate] = useState<iUserTechPost>();

const toggleUpdateModal = (tech?: iUserTechPost) => {
    setTechUpdate(tech)
    setUpdateModal(!updateModal);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <ModalContext.Provider value={{ toggleModal, toggleUpdateModal, modal, updateModal,techUpdate }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalHandling;
