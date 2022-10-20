import * as yup from "yup";
import Container from "../../components/Container/style";
import PError from "../../components/Error/style";
import logo from "../../assets/img/Logo.svg";
import { StyledRegister, StyledRegisterTitle } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegisterUser } from "../../context/Register";


interface iSubmit {
  id:              string;
  name:            string;
  password:        string;
  confirmPassword: string;
  email:           string;
  course_module:   string;
  bio:             string;
  contact:         string;
}

export default function Register() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .min(6, "Minimo de seis digitos")
      .matches(
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*-])/,
        "Sua senha tem que conter @ numero e letra maiuscula"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("Diga algo sobre voce :)"),
    course_module: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iSubmit>({ resolver: yupResolver(formSchema), mode: "onChange" });

  const { OnSubmitObject } = useContext(RegisterUser);

  const Submit = (data: iSubmit) => {
    OnSubmitObject(data);
  };
  const nav = useNavigate();
  return (
    <>
      <Container modalBG={false}>
        <StyledRegisterTitle>
          <div className="div_title_container">
            <img src={logo} alt="kenzie-hub" />
          </div>

          <button onClick={() => nav("/")}>voltar</button>
        </StyledRegisterTitle>
        <StyledRegister>
          <div className="register_text_container">
            <h3>Cadastro</h3>
          </div>
          <form onSubmit={handleSubmit(Submit)}>
            <div className="register_input_container">
              <label htmlFor="name">Nome</label>
              <input
                placeholder="Insira seu nome"
                type="text"
                {...register("name")}
              />
              <PError>{errors.name?.message}</PError>

              <label htmlFor="email">Email</label>
              <input
                placeholder="Insira seu email"
                type="email"
                {...register("email")}
              />
              <PError>{errors.email?.message}</PError>

              <label htmlFor="password">Senha </label>
              <input
                placeholder="Insira sua senha"
                type="password"
                {...register("password")}
              />
              <PError> {errors.password?.message} </PError>

              <label htmlFor="password">Confirmar Senha</label>
              <input
                placeholder="Confirme sua senha"
                type="password"
                {...register("confirmPassword")}
              />
              <PError>{errors.confirmPassword?.message} </PError>
              <label htmlFor="text">Bio</label>
              <input
                placeholder="Conte sobre voce"
                type="text"
                {...register("bio")}
              />
              <PError>{errors.bio?.message} </PError>
              <label htmlFor="contact">Contato</label>
              <input
                placeholder="Diga seu contato"
                type="contato"
                {...register("contact")}
              />
              <PError>{errors.contact?.message} </PError>

              <label htmlFor="select">Selecionar Modulo</label>
              <select {...register("course_module")}>
                <option value="">Selecione</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo
                </option>
              </select>
            </div>
            <div className="register_button_container">
              <button type="submit" disabled={!isValid}>
                {" "}
                Cadastrar
              </button>
            </div>
          </form>
        </StyledRegister>
      </Container>
    </>
  );
}
