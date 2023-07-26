import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isSignedIn = true;
  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export { PrivateRoute };
