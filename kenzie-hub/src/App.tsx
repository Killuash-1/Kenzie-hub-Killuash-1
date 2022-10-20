import { Toaster } from "react-hot-toast";
import Autentication from "./context/Authorization";
import ModalHandeling from "./context/ModalContext";
import RegisterClient from "./context/Register";
import RouterApp from "./Router";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <RegisterClient>
        <ModalHandeling>
          <Autentication>
            <RouterApp />
            <Toaster />
          </Autentication>
        </ModalHandeling>
      </RegisterClient>
      <GlobalStyle />
    </div>
  );
}

export default App;
