import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
// import { PrivateRoute } from "./components/Private";
import { ReactNode } from "react";
import { useAuth } from "./hooks/useAuth";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuth();
  const isSignedIn = Boolean(user);

  console.log(user);

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export { PrivateRoute };

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
export { Router };
