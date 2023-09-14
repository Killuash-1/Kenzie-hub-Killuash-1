import { Toaster } from "react-hot-toast";
import Autentication from "./context/Authorization";
import ModalHandling from "./context/ModalContext";
import RegisterClient from "./context/Register";
import RouterApp from "./Router";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <RegisterClient>
        <ModalHandling>
          <Autentication>
            <RouterApp />
            <Toaster />
          </Autentication>
        </ModalHandling>
      </RegisterClient>
      <GlobalStyle />
    </div>
  );
}

export default App;
