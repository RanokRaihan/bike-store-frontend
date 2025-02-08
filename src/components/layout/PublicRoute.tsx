import { verifyToken } from "@/lib/utils";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);
  const user = token ? verifyToken(token) : null;

  if (token && user) {
    return <Navigate to="/" replace={true} />;
  } else {
    return <>{children}</>;
  }
};

export default PublicRoute;
