import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iUserTechPost } from "../../services/UserTechPost";
import Modal from ".";
import Xbutton from '/src/assets/img/X.svg';
import Container from "../Container/style";
import { Authorization } from "../../context/Authorization";

export function ModalUpdate(){
  const { toggleUpdateModal, techUpdate,  } = useContext(ModalContext);
  const { updateTech } =useContext(Authorization);

  const formSchema = yup.object().shape({
    status: yup.string().required("Senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
  } = useForm<iUserTechPost>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: iUserTechPost) => {
    if(techUpdate)
    updateTech(techUpdate?.id, data);
  }

  
  return (
    <Container modalBG>
       <Modal>
        <Modal.Header>
          <h4>Editar Tecnologia</h4>
          <button className="header_modal_button" onClick={() => toggleUpdateModal()}>
            <img src={Xbutton} alt="Close Button" />
          </button>
        </Modal.Header>
        <Modal.Body onSubmit={handleSubmit(onSubmit)}>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </Modal.Body>
      </Modal>
    
    </Container>
     
  );
}