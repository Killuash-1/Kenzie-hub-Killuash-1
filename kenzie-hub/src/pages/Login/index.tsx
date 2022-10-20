import Container from "../../components/Container/style";
import { StyledLogin, StyledText } from "./style";
import PError from "../../components/Error/style";
import logo from "../../assets/img/Logo.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authorization } from "../../context/Authorization";
import { iLoginApiObject } from "../../services/LoginApi";



export default function Login() {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
    password: yup.string().required("Senha obrigatoria"),
  });

  const nav = useNavigate();
  const { loginUser } = useContext(Authorization);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iLoginApiObject>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  return (
    <>
      <Container modalBG={false}>
        <StyledText>
          <img src={logo} alt="Kenzie-hub" />
        </StyledText>
        <StyledLogin className="login_container">
          <div className="login_text_container">
            <h3>Login</h3>
          </div>
          <form onSubmit={handleSubmit(loginUser)}>
            <div className="login_input_container">
              <label htmlFor="Login"> Login </label>

              <input
                placeholder="Insira seu nome"
                type="email"
                {...register("email")}
              />
              <PError>{errors.email?.message}</PError>
              <label htmlFor="password">Senha</label>
              <input
                placeholder="Insira sua senha"
                type="password"
                {...register("password")}
              />
              <PError>{errors.password?.message}</PError>
            </div>

            <div className="login_button_container">
              <button type="submit" disabled={!isValid}>
                Entrar
              </button>
              <span>Ainda não possui uma conta?</span>
              <button
                className="gray_button_login"
                onClick={() => nav("/Register")}
              >
                Cadastre-se
              </button>
            </div>
          </form>
          <Toaster />
        </StyledLogin>
      </Container>
    </>
  );
}
