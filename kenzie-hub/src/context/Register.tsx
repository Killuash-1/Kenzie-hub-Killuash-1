import React from "react";
import { useNavigate } from "react-router-dom";
import { iRegisterApi, RegisterApi} from "../services/RegisterApi";
import { RegisterToast, RegisterToastError } from "../toast";


interface iRegisterClient{

  children: React.ReactNode
}

interface iOnSubmitObject{
OnSubmitObject: (data: iRegisterApi) => Promise<void>

}

export const RegisterUser = React.createContext({} as iOnSubmitObject);


const RegisterClient = ({ children }: iRegisterClient) => {
  const navegate = useNavigate();

  const OnSubmitObject = async (data: iRegisterApi ) => {
    

    
    try {
        await RegisterApi(data)
        RegisterToast();
        navegate("/");  
    } catch (error) {
      console.error(error);
      RegisterToastError();
    }
  };

  return (
    <RegisterUser.Provider value={{ OnSubmitObject }}>
      {children}
    </RegisterUser.Provider>
  );
};

export default RegisterClient;
