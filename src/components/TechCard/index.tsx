import { useContext } from 'react';
import { DivMainTech } from './styles';
import { CgTrash } from 'react-icons/cg';
import { TechContext } from '../../contexts/TechContext';
import { ITechList } from '../TechList';

const TechCard = ({ title, status, id }: ITechList) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <DivMainTech>
      <p className='title--tech'>{title}</p>
      <div className='div--trash'>
        <p className='status--tech'>{status}</p>

        <button
          className='btn--lixo'
          id={id}
          onClick={(e) => deleteTech(e.currentTarget.id)}
        >
          <CgTrash style={{ color: 'white' }} />
        </button>
      </div>
    </DivMainTech>
  );
};

export default TechCard;
