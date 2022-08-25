import styled from "styled-components";

export const DivMainTech = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 10px 5px;
  background-color: #000;
  margin-bottom: 15px;
  border-radius: 5px;

  &:hover {
    background-color: var(--darkgrey);
    transition: 0.4s;
  }

  .title--tech {
    font-weight: 700;
    line-height: 24px;
    margin-left: 5px;
  }

  .status--tech {
    font-weight: 400;
    color: var(--softgrey);
    font-size: 12px;
  }

  .div--trash {
    display: flex;
    gap: 10px;
    margin-right: 5px;
  }

  .btn--lixo {
    border: none;
    background-color: transparent;
  }
`;
