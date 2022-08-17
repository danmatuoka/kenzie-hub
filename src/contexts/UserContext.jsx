import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import { useEffect } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@hub:token");

    if (token) {
      try {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");

        setUser(data);
        setTech(data.techs);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const registerUser = ({
    name,
    email,
    password,
    course_module,
    bio,
    contact,
  }) => {
    const user = { name, email, password, course_module, bio, contact };

    api
      .post("/users", user)
      .then(() => {
        toast.success("Conta criada com sucesso");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const signIn = async (data) => {
    await api
      .post("/sessions", data)
      .then((response) => {
        const { token, user: userResponse } = response.data;
        api.defaults.headers.authorization = `Bearer ${token}`;

        localStorage.setItem("@hub:token", token);
        localStorage.setItem("@hub:user", userResponse);

        setUser(userResponse);
        setTech(userResponse.techs);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha inválidos");
      });
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  const loadTechs = async () => {
    await api.get("/profile").then((res) => setTech(res.data.techs));
  };

  const newTech = async ({ title, status }) => {
    const tech = { title, status };
    try {
      await api.post("/users/techs/", tech);

      loadUser();
      toast.success("Tech cadastrada com sucesso!");
      setIsOpenModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Algum erro ocorreu!");
    }
  };

  const deleteTech = async (techId) => {
    try {
      await api.delete(`/users/techs/${techId}`);
      loadUser();
      /* setTech([...tech.filter((elem) => elem.id !== techId)]); */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        signIn,
        logout,
        loading,
        newTech,
        isOpenModal,
        setIsOpenModal,
        deleteTech,
        tech,
        setTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
