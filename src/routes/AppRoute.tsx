import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { pagesPath } from "@/utils/path";
import RequiredAuth from "./RequiredAuth";
import { useAppDispatch } from "@/hooks/hooks";
import { loadToken } from "@/redux/slice/authSlice";
import { MainLayout } from "@/components/layout";
import { HomePage, LoginPage, MonthlyBudgetPage, SignUpPage, TransactionPage } from "@/pages";

const protectedLayout = (
  <RequiredAuth>
    <MainLayout />
  </RequiredAuth>
);

export const AppRouter: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadToken());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={pagesPath.dashboard.url} element={protectedLayout}>
          <Route path={pagesPath.dashboard.url} element={<HomePage />} />
          <Route path={pagesPath.monthlyBudget.url} element={<MonthlyBudgetPage />} />
          <Route path={pagesPath.transaction.url} element={<TransactionPage />} />
        </Route>
        <Route path={pagesPath.login.url} element={<LoginPage />} />
        <Route path={pagesPath.register.url} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
