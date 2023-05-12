import React, { useContext } from "react";
import styled from "styled-components";
import { MealItemForm } from "./MealItemForm";

export const MealItem = ({ meal }) => {


  return (
      <>
        <Container>
          <StyledMealItem>
             <h3>{meal.title}</h3>
             <p>{meal.description}</p>
             <span>${meal.price}</span>
           </StyledMealItem>
           <MealItemForm id={meal._id} />
        </Container><HrItem/>
      </>

  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HrItem = styled.hr`
  border: 1px solid #d6d6d6;
  margin: 20px 0;

`
const StyledMealItem = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h4 {
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
  
`;
