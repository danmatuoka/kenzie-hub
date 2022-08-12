import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signIn = async (data) => {
    await api
      .post("/sessions", data)
      .then((response) => {
        const { token, user: userResponse } = response.data;

        localStorage.setItem("@hub:token", JSON.stringify(token));
        localStorage.setItem("@hub:user", JSON.stringify(userResponse));

        setUser(userResponse);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha inválidos");
      });
  };

  return (
    <UserContext.Provider value={{ user, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
