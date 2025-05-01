import { Navigate } from "react-router-dom";
import { usePlayerName } from "../hooks/usePlayerName";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { playerName } = usePlayerName();

  if (!playerName) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
