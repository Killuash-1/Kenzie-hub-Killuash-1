import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Authorization } from "../../context/Authorization";

const SecureRoutes = () => {
  const { userGet, load } = useContext(Authorization);
 
  
  const location = useLocation();
  if (load) {
    return null;
  }

  return userGet ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};
export default SecureRoutes;
