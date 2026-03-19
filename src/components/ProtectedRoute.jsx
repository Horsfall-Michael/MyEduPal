import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true;
   // replace with real logic

  return isAuthenticated ? children : <Navigate to="/" />;
}