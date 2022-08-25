import styled from "styled-components";

export const DivCadastro = styled.div`
  width: 90%;
  max-width: 300px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container--cadastro {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn--voltar {
      color: #fff;
      background-color: var(--darkgrey);
      border: none;
      padding: 5px 20px 5px 20px;
      border-radius: 5px;
    }

    .btn--voltar:hover {
      background-color: var(--mediumgrey);
    }
  }

  select {
    width: 260px;
    height: 35px;
    border-radius: 5px;
    border: none;
  }

  select option {
    width: 260px;
    height: 35px;
    border-radius: 5px;
    border: none;
  }

  .btn--cadastro {
    width: 260px;
    height: 35px;
    border-radius: 5px;
    border: none;
    color: white;
    background: var(--pink);
  }

  .btn--cadastro:hover {
    background: var(--brightpink);
  }
`;
