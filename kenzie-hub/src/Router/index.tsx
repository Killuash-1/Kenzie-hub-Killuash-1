import { Routes, Route } from "react-router-dom";
import SecureRoutes from "../components/SecureRoutes";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route element={<SecureRoutes />}>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RouterApp;
