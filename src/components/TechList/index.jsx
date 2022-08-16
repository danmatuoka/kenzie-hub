import { useContext, useEffect } from "react";
import { useResolvedPath } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";
import TechCard from "../TechCard";

const TechList = () => {
  const { user, tech } = useContext(UserContext);

  return (
    <>
      {tech.map(({ id, title, status }) => {
        return <TechCard key={id} title={title} status={status} id={id} />;
      })}
    </>
  );
};

export default TechList;
