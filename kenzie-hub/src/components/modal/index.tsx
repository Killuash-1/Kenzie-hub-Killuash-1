
import Xbutton from "/src/assets/img/X.svg";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Authorization } from "../../context/Authorization";
import PError from "../Error/style";
import { DivModal } from "./style";
import { ModalContext } from "../../context/ModalContext";
import { iUserTechPost } from "../../services/UserTechPost";

export default function ModalBody() {
  const { registerTechs } = useContext(Authorization);
  const { toggleModal }   = useContext(ModalContext);
  const   formSchema      = yup.object().shape({
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
    <>
      {" "}
      <DivModal>
        <div className="header_modal">
          <h4>Cadastrar Tecnologia</h4>
          <button className="header_modal_button" onClick={() => toggleModal()}>
            <img src={Xbutton} />
          </button>
        </div>

        <form className="form_modal" onSubmit={handleSubmit(registerTechs)}>
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
        </form>
      </DivModal>
    </>
  );
}
