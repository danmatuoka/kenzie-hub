import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import toast from 'react-hot-toast';

interface IUserProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs?: string[];
  works?: string[];
}

interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  course_module: string;
  bio: string;
  contact: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

interface IUserContext {
  user: IUser[] | null;
  setUser: Dispatch<SetStateAction<IUser[] | null>>;
  tech: ITech[];
  setTech: Dispatch<SetStateAction<ITech[]>>;
  loading: boolean;
  //setLoding: Dispatch<SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  loadUser: () => Promise<void>;
  registerUser: (data: IRegisterUser) => void;
  signIn: (data: IUserLogin) => Promise<void>;
  logout: () => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser[] | null>(null);
  const [tech, setTech] = useState<ITech[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem('@hub:token');

    if (token) {
      try {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const { data } = await api.get('/profile');

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
  }: IRegisterUser) => {
    const user = { name, email, password, course_module, bio, contact };

    api
      .post('/users', user)
      .then(() => {
        toast.success('Conta criada com sucesso');
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const signIn = async (data: IUserLogin) => {
    await api
      .post('/sessions', data)
      .then((response) => {
        const { token, user: userResponse } = response.data;
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        localStorage.setItem('@hub:token', token);
        localStorage.setItem('@hub:user', userResponse);

        setUser(userResponse);
        setTech(userResponse.techs);
        navigate('/dashboard', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error('Email ou senha inválidos');
      });
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
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
        isOpenModal,
        setIsOpenModal,
        tech,
        setTech,
        loadUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
