import styled from "styled-components";

export const DivLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container--img {
    padding: 40px;
  }
`;

export const DivForm = styled.div`
  width: 90%;
  max-width: 300px;
  height: 400px;
  margin: 0 auto;
  background-color: var(--darkgrey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .btn--entrar {
    width: 260px;
    height: 35px;
    border-radius: 5px;
    border: none;
    color: white;
    background: var(--pink);
  }

  .btn--cadastrar {
    width: 260px;
    height: 35px;
    border-radius: 5px;
    border: none;
    color: white;
    background: var(--softgrey);
  }

  .p--login {
    margin-bottom: 20px;
    font-size: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  background-color: var(--darkgrey);
  width: 100%;
  border-radius: 5px;
  padding: 20px 0 20px 0;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 5px;

  span {
    color: var(--red);
  }
`;

export const Input = styled.input`
  width: 260px;
  height: 35px;
  border: none;
  padding: 10px;
  background: var(--mediumgrey);
  color: #fff;

  &::placeholder {
    color: var(--softgrey);
  }
`;
