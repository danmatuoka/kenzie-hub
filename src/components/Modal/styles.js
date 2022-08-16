import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
`;

export const ContainerModal = styled.div`
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
  /* height: 270px; */
  background-color: var(--darkgrey);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding-bottom: 10px;
  position: relative;

  .header--modal {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 15px;
    background-color: var(--mediumgrey);
    margin-bottom: 10px;
    border-radius: 5px 5px 0 0;
  }

  .form--modal {
    display: flex;
    flex-direction: column;
    gap: 15px;

    select {
      width: 260px;
      height: 35px;
      border-radius: 5px;
      border: none;
      background: var(--mediumgrey);
      color: white;
    }

    .btn--modal {
      width: 260px;
      height: 35px;
      border-radius: 5px;
      border: none;
      color: white;
      background: var(--pink);
    }

    .btn--modal:hover {
      background: var(--brightpink);
    }
  }
`;
