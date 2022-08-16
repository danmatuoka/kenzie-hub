import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { DivMainTech } from "./styles";
import { CgTrash } from "react-icons/cg";

const TechCard = ({ title, status, id }) => {
  const { deleteTech, tech } = useContext(UserContext);

  return (
    <DivMainTech>
      <p className="title--tech">{title}</p>
      <div className="div--trash">
        <p className="status--tech">{status}</p>

        <button
          className="btn--lixo"
          id={id}
          onClick={(e) => deleteTech(e.currentTarget.id)}
        >
          <CgTrash style={{ color: "white" }} />
        </button>
      </div>
    </DivMainTech>
  );
};

export default TechCard;
