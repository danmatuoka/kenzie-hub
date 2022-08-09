import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { ContainerDashboard } from "./style";

const Dashboard = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("@hub:user")));

  const navigate = useNavigate();

  return (
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
  );
};

export default Dashboard;
