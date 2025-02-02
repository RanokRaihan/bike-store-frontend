import { verifyToken } from "@/lib/utils";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const ProtectedRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role?: "admin" | "customer";
}) => {
  const { token } = useAppSelector((state) => state.auth);
  const user = token ? verifyToken(token) : null;

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  } else if (role !== undefined && user?.role !== role) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You are not authorized to access this page</p>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
