import { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { UserContext } from "../../contexts/UserContext";
import { ContainerDashboard } from "./style";

const Dashboard = () => {
  //const [user] = useState(localStorage.getItem("@hub:user"));
  const { user, loading } = useContext(UserContext);

  const navigate = useNavigate();

  if (loading) return <div>Carregando...</div>;

  return user ? (
    <ContainerDashboard className="container--dashboard">
      <div className="header--dashboard">
        <Logo />
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn--sair"
        >
          Sair
        </button>
      </div>

      <div className="info--user">
        <p className="user--dashboard">Olá, {user.name}</p>
        <p className="course--dashboard">{user.course_module}</p>
      </div>

      <div className="body--desenvolvimento">
        <h3>Que pena! Estamos em desenvolvimento</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </ContainerDashboard>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Dashboard;
