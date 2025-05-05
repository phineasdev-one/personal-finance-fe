import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { pagesPath } from "@/utils/path";
import RequiredAuth from "./RequiredAuth";
import { useAppDispatch } from "@/hooks/hooks";
import { loadToken } from "@/redux/slice/authSlice";

const protectedLayout = (
  <RequiredAuth>
    <>Main layout</>
  </RequiredAuth>
);

/** Application router */
export const AppRouter: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadToken());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={pagesPath.dashboard.url} element={protectedLayout}></Route>
        <Route path={pagesPath.login.url} element={<>Login</>} />
      </Routes>
    </BrowserRouter>
  );
};
