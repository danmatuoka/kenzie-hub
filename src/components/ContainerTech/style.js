import styled from "styled-components";

export const DivTech = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;

  .header--tech {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .main--tech {
    background-color: var(--mediumgrey);
    padding: 8px;
    border-radius: 5px;
  }
`;
