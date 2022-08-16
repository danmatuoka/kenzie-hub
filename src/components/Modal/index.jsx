import { useForm } from "react-hook-form";
import { Input, Label } from "../FormLogin/style";
import { Container, ContainerModal } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Modal = () => {
  const { newTech, isOpenModal, setIsOpenModal } = useContext(UserContext);

  const FormSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  return (
    <Container>
      <ContainerModal>
        <div className="header--modal">
          <p>Cadastrar Tecnologia</p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            x
          </p>
        </div>
        <form className="form--modal" onSubmit={handleSubmit(newTech)}>
          <Label>
            Nome
            <Input placeholder="Tecnologia" {...register("title")} />
            <span>{errors.title?.message}</span>
          </Label>
          <Label>
            Selecionar status
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </Label>
          <button type="submit" className="btn--modal">
            Cadastrar tecnologia
          </button>
        </form>
      </ContainerModal>
    </Container>
  );
};

export default Modal;
