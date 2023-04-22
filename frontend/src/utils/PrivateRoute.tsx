import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  console.log("Private route works ");
  const auth = false;
  return auth ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
