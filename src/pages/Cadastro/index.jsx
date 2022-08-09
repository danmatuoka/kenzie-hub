import { Form, Input, Label } from "../../components/FormLogin/style";
import { useForm } from "react-hook-form";
import api from "../../services/api.js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivCadastro } from "./styles";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../../components/Logo";

const Cadastro = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
        "8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = ({ name, email, password, course_module, bio, contact }) => {
    const user = { name, email, password, course_module, bio, contact };

    api
      .post("/users", user)
      .then(() => {
        toast.success("Conta criada com sucesso");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <DivCadastro>
      <div className="container--cadastro">
        <Logo />
        <button className="btn--voltar">Voltar</button>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Crie sua conta</h3>

        <p>Rapido grátis, vamos nessa</p>

        <Label>
          Nome
          <Input placeholder="Digite aqui seu nome" {...register("name")} />
          <span>{errors.name?.message}</span>
        </Label>
        <Label>
          Email
          <Input placeholder="Digite aqui seu e-mail" {...register("email")} />
          <span>{errors.email?.message}</span>
        </Label>
        <Label>
          Senha
          <Input
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </Label>
        <Label>
          Confirmar senha
          <Input
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
        </Label>
        <Label>
          Bio
          <Input placeholder="Fale sobre você" {...register("bio")} />
          <span>{errors.bio?.message}</span>
        </Label>
        <Label>
          Contato
          <Input placeholder="Opçao de contato" {...register("contact")} />
          <span>{errors.contact?.message}</span>
        </Label>
        <Label>
          Selecionar módulo
          <select {...register("course_module")}>
            <option value="Primeiro Modulo">1º Modulo</option>
            <option value="Segundo Modulo">2º Modulo</option>
            <option value="Terceiro Modulo">3º Modulo</option>
          </select>
        </Label>
        <button className="btn--cadastro" type="submit">
          Cadastrar
        </button>
      </Form>
    </DivCadastro>
  );
};

export default Cadastro;
