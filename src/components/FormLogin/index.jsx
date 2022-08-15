import { DivForm, DivLogin, Form, Input, Label } from "./style";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../Logo";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const FormLogin = ({ login, setLogin }) => {
  const FormSchema = yup.object().shape({
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "A senha precisa ter no mínimo 8 caracteres")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const { signIn } = useContext(UserContext);

  return (
    <DivLogin>
      <div className="container--img">
        <Logo />
      </div>
      <DivForm>
        <h3 className="titulo--login">Login</h3>

        <Form onSubmit={handleSubmit(signIn)}>
          <Label>
            Email
            <Input placeholder="email@kenzie.com.br" {...register("email")} />
            <span>{errors.email?.message}</span>
          </Label>

          <Label>
            Senha
            <Input
              type="password"
              placeholder="senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
          </Label>

          <button type="submit" className="btn--entrar">
            Entrar
          </button>
        </Form>
        <p className="p--login">Ainda não possui uma conta?</p>
        <Link to="/cadastro">
          <button className="btn--cadastrar">Cadastre-se</button>
        </Link>
      </DivForm>
    </DivLogin>
  );
};

export default FormLogin;
