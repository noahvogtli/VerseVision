import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { session, loading } = useAuth();

  if (loading) return null;

  return session ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
