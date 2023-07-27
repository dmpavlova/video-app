import { Tabs } from "@skbkontur/react-ui";
import { ThemeContext, DARK_THEME } from "@skbkontur/react-ui";
import { useEffect, useState } from "react";
import { FilterContainer } from "../styles/components/FilterContainer.styled";
import { data } from "../data";


type FilterProps = {
  chosenCategory: string;
  onChangeCategory: (category: string)=>void;
};

const uniqueCategories = [
  ...new Set(data.map((movieObject) => movieObject.category)),
];

function Filter({chosenCategory, onChangeCategory}: FilterProps) {

 

  

  return (
    <ThemeContext.Provider value={DARK_THEME}>
      <FilterContainer>
        <Tabs value={chosenCategory} onValueChange={onChangeCategory}>
          {uniqueCategories.map((uniqueCategory) => (
            <Tabs.Tab
              key={uniqueCategory}
              id={uniqueCategory}
            >
              {uniqueCategory}
            </Tabs.Tab>
          ))}
        </Tabs>
      </FilterContainer>
    </ThemeContext.Provider>
  );
}
export default Filter;
