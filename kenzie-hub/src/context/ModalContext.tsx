import { createContext, useState } from "react";

interface iModalHandeling{

  children: React.ReactNode
}
interface iModalContext{
  modal: boolean
  toggleModal: () => void
}

export const ModalContext = createContext({} as iModalContext);

const ModalHandeling = ({ children }: iModalHandeling) => {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <ModalContext.Provider value={{ toggleModal, modal }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalHandeling;
