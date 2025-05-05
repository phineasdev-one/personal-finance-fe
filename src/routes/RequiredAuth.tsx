import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { pagesPath } from "@/utils/path";
import { useAppSelector } from "@/hooks/hooks";

/** Required auth */
const RequiredAuth: FC<PropsWithChildren> = ({ children }) => {
  const authState = useAppSelector((state) => state.auth);

  const location = useLocation();

  if (authState.authenticated && location.pathname === pagesPath.dashboard.url) {
    return <Navigate to={pagesPath.dashboard.url} replace />;
  }

  return authState.authenticated ? children : <Navigate to={pagesPath.login.url} replace />;
};

export default RequiredAuth;
