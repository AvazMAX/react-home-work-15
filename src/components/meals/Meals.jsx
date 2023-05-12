import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MealItem } from "./mealItem/MealItem";
import { fetchRequest } from "../../Lib/fetchApi";
import { useSortData } from "../../Counter/sort";
import { Button } from "../UI/Button";

export const Meals = React.memo(() => {
  const [meals, setMeals] = useState([]);
  const { sortData, sort } = useSortData(meals);

  

  async function getFoods() {
    const response = await fetchRequest(`/foods`);
    setMeals(response);
  }
  useEffect(() => {
    getFoods();
  }, []);
  return (
    <ConstainerSecondMeals>
      <ContainerSort>
        <Button onClick={() => sort("ASC")}>+</Button>
        <Button onClick={() => sort("DESC")}>-</Button>
      </ContainerSort>
      {meals?.map((meal) => {
        return (
          <MealsItem key={meal._id}>
            <MealItem meal={meal} />
          </MealsItem>
        );
      })}
    </ConstainerSecondMeals>
  );
});

const ConstainerSecondMeals = styled.div`
  width: 65%;
  background: #ffffff;
  border-radius: 16px;
  margin: 0 auto;
  margin-top: 230px;
  padding: 28px 40px;
`;
const MealsItem = styled.div`
  width: 100%;
`;
const ContainerSort = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;
