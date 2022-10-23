import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/Logo.svg";
import Container from "../../components/Container/style";
import ModalBody from "../../components/modal";
import TechCard from "../../components/TechCard";
import { Authorization } from "../../context/Authorization";
import { ModalContext } from "../../context/ModalContext";
import { DivDashBoard } from "./style";

  
export default function Dashboard() {
  
  const { userGet } = useContext(Authorization);
  const { toggleModal, modal } = useContext(ModalContext);

  const nav = useNavigate();

  const logOut = () => {
    localStorage.clear();
    nav("/");
  };
  
  return (
    <DivDashBoard>
      <Toaster />
      {modal ?(
        <Container modalBG>
          <ModalBody />
        </Container>
      ): null}

      <nav>
        <div className="div_img_container">
          <img src={logo} alt="Kenzie Hub" />
        </div>
        <button className="header_button" onClick={() => logOut()}>
          {" "}
          Sair
        </button>
      </nav>

      <header>
        <div className="user_container">
          <div className="div_user_container">
            
            <h2>Ola, {userGet?.name}</h2>
            <span>{userGet?.course_module}</span>
          </div>
        </div>
      </header>

      <main>
        <div className="div_message_container">
          <h2>Tecnologias</h2>
          <button className="div_button_tech" onClick={() => toggleModal()}>
            +
          </button>
        </div>
        <div className="div_tech_container">
          {userGet?.techs.length ? (
            <ul>
              <TechCard/>
            </ul>
          ) : (
            <h2>Tao vazio aqui :( </h2>
          )}
        </div>
      </main>
    </DivDashBoard>
  );
}
