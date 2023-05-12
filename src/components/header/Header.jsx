import styled from "styled-components";
import { Busket } from "./Busket";
import { useEffect, useState } from "react";

export const Header = ({ onToggle }) => {

  const [clickCss, setClickCss] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      setClickCss("move");
    }, 0);

    return () => {
      clearInterval(id);
    };
  }, [clickCss]);

  return (
    <Container>
      <h1>ReactMeals</h1>
      <Busket onToggle={onToggle}>Your Cart</Busket>
    </Container>
  );
};

const Container = styled.header`
  height: 101px;
  width: 100%;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  color: #fff;
  position: fixed;
  z-index: 3;
`;
