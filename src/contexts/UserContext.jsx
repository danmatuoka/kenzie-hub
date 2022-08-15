import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import { useEffect } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@hub:token");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");

        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const signIn = async (data) => {
    await api
      .post("/sessions", data)
      .then((response) => {
        const { token, user: userResponse } = response.data;
        api.defaults.headers.authorization = `Bearer ${token}`;

        localStorage.setItem("@hub:token", token);
        localStorage.setItem("@hub:user", userResponse);

        setUser(userResponse);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha inválidos");
      });
  };

  return (
    <UserContext.Provider value={{ user, signIn, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
