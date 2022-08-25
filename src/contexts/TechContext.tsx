import { ReactNode, useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import toast from 'react-hot-toast';
import api from '../services/api';
import { UserContext } from './UserContext';

interface ITechProviderProps {
  children: ReactNode;
}

interface INewTech {
  title: string;
  status: string;
}

interface ITechContext {
  newTech: ({ title, status }: INewTech) => Promise<void>;
  deleteTech: (techId: string) => Promise<void>;
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

const TechProvider = ({ children }: ITechProviderProps) => {
  const { loadUser, setIsOpenModal } = useContext(UserContext);

  const newTech = async ({ title, status }: INewTech) => {
    const tech = { title, status };
    try {
      await api.post('/users/techs/', tech);

      loadUser();
      toast.success('Tech cadastrada com sucesso!');
      setIsOpenModal(false);
    } catch (error) {
      console.error(error);
      toast.error('Algum erro ocorreu!');
    }
  };

  const deleteTech = async (techId: string) => {
    try {
      await api.delete(`/users/techs/${techId}`);
      loadUser();
      /* setTech([...tech.filter((elem) => elem.id !== techId)]); */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={{ newTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
