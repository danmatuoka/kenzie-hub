import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const RoutesMain = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("hub:token"));

    token && setLogin(true);
  });

  return (
    <Routes>
      <Route path="/" element={<Login login={login} setLogin={setLogin} />} />

      <Route path="/cadastro" element={<Cadastro />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoutesMain;
