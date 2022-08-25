import { useContext } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import TechCard from '../TechCard';

export interface ITechList {
  id: string;
  title: string;
  status: string;
}

const TechList = () => {
  const { tech } = useContext(UserContext);

  return (
    <>
      {tech.map(({ id, title, status }: ITechList) => {
        return <TechCard key={id} title={title} status={status} id={id} />;
      })}
    </>
  );
};

export default TechList;
