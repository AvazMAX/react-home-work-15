import React, { useCallback, useContext, useState } from "react";
import { Button } from "../../UI/Button";
import { ReactComponent as PlusIcon } from "../../../assets/iccons/plus.svg";
import styled from "styled-components";
import { cartContext } from "../../../store/cart-context";

export const MealItemForm = ({ id }) => {
  const {addItem} = useContext(cartContext);
  const [amount, setAmount] = useState(1);

  const changeHandler = (e) => {
    setAmount(e.target.value);
  };
  const addProduct = useCallback(() => {
    addItem(id, +amount);
  },[{},id]);
  return (
    <Container>
      <InputBlock>
        <label htmlFor="inputId">Amount</label>
        <input
          type="number"
          id={id}
          min={1}
          value={amount}
          onChange={changeHandler}
        />
      </InputBlock>
      <Button
        borderRadius="rounder"
        variant="container"
        icon={<PlusIcon />}
        onClick={addProduct}
      >
        Add
      </Button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;
const InputBlock = styled.div`
  margin-bottom: 12px;
  label {
    font-size: 18px;
    color: #222222;
    margin-right: 20px;
    font-weight: 600;
  }
  input {
    border: 2px solid #d6d6d6;
    border-radius: 6px;
    width: 60px;
    height: 32px;
    outline: none;
    padding: 4px 12px;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
  }
`;
