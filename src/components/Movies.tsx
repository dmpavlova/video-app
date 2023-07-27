import { useState, useEffect } from "react";
import { MovieObject, data } from "../data";
import { MoviesContainer } from "../styles/components/MoviesContainer.styled";
import { Movie } from "./Movie";
import { Search } from "./Search";
import Filter from "./Filter";
import { MovieCopy } from "./MovieCopy";


type MoviesProps = {
  movieObjects: MovieObject[];
};
function Movies({ movieObjects }: MoviesProps): JSX.Element {
  const [search, setSearch] = useState("");
  const [chosenCategory, setChosenCategory] = useState("Боевики");
  console.log(chosenCategory)

  const uniqueCategories = [
    ...new Set(data.map((movieObject) => movieObject.category)),
  ];

/*   useEffect(() => {
    setChosenCategory(uniqueCategories[0]);
  }, []);
   */
  /* const filteredMovies = movieObjects.filter((movieObject) =>
    movieObject.name.toLowerCase().includes(search.toLowerCase())
  ); */


  return (
    <>
      <Search onSearchChange={(data) => setSearch(data)} />
      <Filter chosenCategory={chosenCategory} onChangeCategory={setChosenCategory} />
      <MoviesContainer>
        {/*  {filteredMovies.map((element) => Movie(element))}    */}
        {/* {selectedGenre.map((el) => MovieCopy(el))} */}
        {movieObjects.filter((el)=>el.category===chosenCategory).map((movieObject)=>Movie(movieObject))}
      </MoviesContainer>
    </>
  );
}
export default Movies;
