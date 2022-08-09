import styled from "styled-components";

export const ContainerDashboard = styled.div`
  width: 100%;
  height: 100%;

  .header--dashboard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #fff;
  }

  .btn--sair {
    color: #fff;
    background-color: var(--darkgrey);
    border: none;
    padding: 5px 20px 5px 20px;
    border-radius: 5px;
  }

  .user--dashboard {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  .course--dashboard {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--softgrey);
  }

  .info--user {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  @media screen and (min-width: 700px) {
    .info--user {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .body--desenvolvimento {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`;
