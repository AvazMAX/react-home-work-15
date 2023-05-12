import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count < 5 ? (prev) => prev + 1 : 1);
  };
  const dec = () => {
    setCount(count > 1 ? (prev) => prev - 1 : 5);
  };

  return {
    count,
    inc,
    dec,
  };
};
