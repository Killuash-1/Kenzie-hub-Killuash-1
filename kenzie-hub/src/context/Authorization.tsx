import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../services";
import { iLoginApi, iLoginApiObject, iUser, LoginApi, UserGet } from "../services/LoginApi";
import { iUserTechPost, UserTechPost } from "../services/UserTechPost";
import {
  DeleteTechToast,
  LoginToast,
  LoginToastError,
  TechToast,
  TechToastError,
} from "../toast";
import { ModalContext } from "./ModalContext";

interface iAutentication{
 children: React.ReactNode
}

interface iAuthorization{
 
  userGet: iUser | null
  loginUser: (data: iLoginApiObject) => Promise<void>;
  load: boolean
  registerTechs: (data: iUserTechPost) => Promise<void>
  deleteTech: (data: string) => Promise<void>
}


export const Authorization = createContext({} as iAuthorization);

const Autentication = ({ children }: iAutentication) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userGet, setUserGet] = useState<iUser|null>(null);
  const [load, setLoad] = useState<boolean>(true);
  const { toggleModal } = useContext(ModalContext);

  const loginUser = async (data: iLoginApiObject) => {

    try {
    const res =  await LoginApi(data)
    const {user, token }= res
      LoginToast()

      Api.defaults.headers.authorization = `Bearer ${res.token}`;
     
      setUserGet( user);

      localStorage.setItem("@hubKenzie", token);

      const navegateTo = location.state?.from?.pathname || "Dashboard";
      navigate(navegateTo, { replace: true });
    } catch (_) {
      LoginToastError();
      
    }
  };

  const updateTechs = async () => {
    const user = await UserGet()
    setUserGet(user);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@hubKenzie");
     
        
      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;
            const user = await UserGet()
            
            
          setUserGet(user);

          navigate("/Dashboard", { replace: true });
        } catch (_) { }
          
      
      }
      setLoad(false);
    };

    loadUser();
  }, []);

  const registerTechs = async (data: iUserTechPost) => {
    const token = localStorage.getItem("@hubKenzie");

    try {
     await UserTechPost(data)
      Api.defaults.headers.authorization = `Bearer ${token}`;

      TechToast();
      updateTechs();
      toggleModal();
    } catch (_) {
      
      TechToastError();
    }
  };

  const deleteTech = async (tech_id: string) => {
    try {
      const res = await Api.delete(`/users/techs/${tech_id}`);
      DeleteTechToast();
      updateTechs();
    } catch (_) {}
  };

  return (
    <Authorization.Provider
      value={{ loginUser, userGet, load, registerTechs, deleteTech }}
    >
      {children}
    </Authorization.Provider>
  );
};
export default Autentication;
