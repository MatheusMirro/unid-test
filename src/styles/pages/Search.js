import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding-top: 30px;
`;

export const BtnControl = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-gap: 150px;
`;

export const Joao = styled.button`
  width: 20%;
`;

export const Input = styled.input`
  display: flex;
  position: relative;
  width: 20%;
  background-color: transparent;
  text-align: center;
  align-items: center;
  justify-content: center;
  left: 40%;
  border: none;
  color: #12130f;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 1.5em;
  font-weight: 300;
  padding-bottom: 10px;
  margin-top: 10px;
  font-family: roboto, sans-serif;

  @media (max-width: 1024px) {
    widht: 75%;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
    padding-right: 30px;
  }

  @media (max-width: 425px) {
    width: 60%;
  }

  @media (max-width: 320px) {
    width: 80%;
    padding-right: 10%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 1024px) {
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
    padding-right: 30px;
  }

  @media (max-width: 425px) {
    width: 115%;
  }

  @media (max-width: 320px) {
    width: 120%;
  }
`;

export const ButtonContainer = styled.button`
  cursor: pointer;
  width: 20%;

  justify-content: center;
  @media (max-width: 1440px) {
    color: orange;
  }

  @media (max-width: 554px) {
    margin-right: 10px;
    padding-right: 30px;
  }

  @media (max-width: 425px) {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 320px) {
    width: 90%;
  }
`;
