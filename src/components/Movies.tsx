import { useState, useEffect } from "react";
import { MovieObject, data } from "../data";
import { MoviesContainer } from "../styles/components/MoviesContainer.styled";
import { Movie } from "./Movie";
import { Search } from "./Search";

type MoviesProps = {
  movieObjects: MovieObject[];
};
function Movies({ movieObjects }: MoviesProps): JSX.Element {
  const [search, setSearch] = useState("");

  /* const filteredMovies = movieObjects.filter((movieObject) =>
    movieObject.name.toLowerCase().includes(search.toLowerCase())
  ); */

  return (
    <>
      <Search onSearchChange={(data) => setSearch(data)} />
      <MoviesContainer>
        {movieObjects.map((element) => Movie(element))}
      </MoviesContainer>
    </>
  );
}
export default Movies;
