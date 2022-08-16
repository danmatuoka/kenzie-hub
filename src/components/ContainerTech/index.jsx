import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import TechList from "../TechList";
import { DivTech } from "./style";
import { BsPlusSquareFill } from "react-icons/bs";

const ContainerTech = () => {
  const { isOpenModal, setIsOpenModal } = useContext(UserContext);

  return (
    <DivTech>
      <div className="header--tech">
        <p>Tecnologias</p>
        <p onClick={() => setIsOpenModal(!isOpenModal)}>
          <BsPlusSquareFill style={{ cursor: "pointer" }} />
        </p>
      </div>
      <div className="main--tech">
        <TechList />
      </div>
    </DivTech>
  );
};

export default ContainerTech;
