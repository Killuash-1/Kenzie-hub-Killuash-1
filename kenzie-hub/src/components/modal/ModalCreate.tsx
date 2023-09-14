import { yupResolver } from "@hookform/resolvers/yup";
import Modal from ".";
import PError from "../Error/style";
import Input from "../Input";
import Xbutton from '/src/assets/img/X.svg';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { iUserTechPost } from "../../services/UserTechPost";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Authorization } from "../../context/Authorization";

/**
 * Creates a modal for creating a technology.
 * @returns The JSX element representing the modal.
 */
export function ModalCreate(): JSX.Element {
  const { toggleModal } = useContext(ModalContext);
  const { registerTechs } = useContext(Authorization);

  const formSchema = yup.object().shape({
    title: yup.string().required("Diga uma tecnologia"),
    status: yup.string().required("Senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserTechPost>({
    resolver: yupResolver(formSchema),
  });

  return (
      <Modal>
        <Modal.Header>
          <h4>Cadastrar Tecnologia</h4>
          <button className="header_modal_button" onClick={() => toggleModal()}>
            <img src={Xbutton} alt="Close Button" />
          </button>
        </Modal.Header>
        <Modal.Body onSubmit={handleSubmit(registerTechs)}>
          <label htmlFor="tecnologia">Tecnologia</label>
          <Input
            register={register}
            placeholder="Ex: Julia"
            name="title"
            type="text"
          />
          <PError>{errors.title?.message}</PError>

          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </Modal.Body>
      </Modal>
  );
}
