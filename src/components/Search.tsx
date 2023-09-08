import SearchIcon from "@skbkontur/react-icons/Search";
import { Button } from "@skbkontur/react-ui";
import { ThemeContext, DARK_THEME } from "@skbkontur/react-ui";
import { SearchContainer } from "../styles/components/SearchContainer.styled";
import { SearchInput } from "../styles/components/Search.styled";
import { useState } from "react";

type SearchProps = {
  onSearchChange: (search: string) => void;
};

export function Search({ onSearchChange }: SearchProps): JSX.Element {
  const onMoviesSearch = (searchName: string) => {
    onSearchChange(searchName);
  };

  return (
    <ThemeContext.Provider value={DARK_THEME}>
      <SearchContainer>
        <SearchInput
          placeholder="Поиск фильмов по названию"
          leftIcon={<SearchIcon />}
          onValueChange={onMoviesSearch}
        />
        <Button use="danger">Поиск</Button>
      </SearchContainer>
    </ThemeContext.Provider>
  );
}
