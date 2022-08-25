import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import ContainerTech from '../../components/ContainerTech';
import Logo from '../../components/Logo';
import Modal from '../../components/Modal';
import { UserContext } from '../../contexts/UserContext';
import { ContainerDashboard } from './style';

const Dashboard = () => {
  //const [user] = useState(localStorage.getItem("@hub:user"));
  const { user, logout, loading, isOpenModal } = useContext(UserContext);

  if (loading) return <div>Carregando...</div>;

  return user ? (
    <ContainerDashboard className='container--dashboard'>
      <div className='header--dashboard'>
        <Logo />
        <button
          onClick={() => {
            logout();
          }}
          className='btn--sair'
        >
          Sair
        </button>
      </div>

      <div className='info--user'>
        <p className='user--dashboard'>Olá, {user[0].name}</p>
        <p className='course--dashboard'>{user[0].course_module}</p>
      </div>

      <ContainerTech />
      {isOpenModal && <Modal />}
    </ContainerDashboard>
  ) : (
    <Navigate to='/' replace />
  );
};

export default Dashboard;
