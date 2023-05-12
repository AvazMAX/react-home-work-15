import { useState } from "react";

export const useSortData = (data) => {
  const [sortData, setSortData] = useState([]);

  const sort = (option) => {
    if (option === "ASC") {
      const sortedData = data.sort((a, b) => {
        return a.price - b.price;
      });
      setSortData([...data]);
    } else if (option === "DESC") {
      setSortData([
        ...data.sort((a, b) => {
          return b.price - a.price;
        }),
      ]);
    } else {
      return 0;
    }
  };
  return {
    sortData,
    sort,
  };
};
