import firstMovie from ".//pic/pic1.svg";
import secondMovie from ".//pic/pic2.svg";

export type MovieObject = {
  id: number;
  rating: number;
  name: string;
  image: string;
  category: string;
};

export const data: MovieObject[] = [
  {
    id: 1,
    rating: 83,
    name: "Top Gun: Maverick (2022)",
    image: firstMovie,
    category: 'Боевики'
  },
  {
    id: 2,
    rating: 68,
    name: "Fantastic Beasts: The Secrets of Dumbledore (2022)",
    image: secondMovie,
    category: 'Фантастика'
  },
  {
    id: 3,
    rating: 83,
    name: "Top Gun: Maverick (2022)",
    image: firstMovie,
    category: 'Боевики'
  },
  {
    id: 4,
    rating: 68,
    name: "Fantastic Beasts: The Secrets of Dumbledore (2022)",
    image: secondMovie,
    category: 'Фантастика'
  },
  {
    id: 5,
    rating: 83,
    name: "Top Gun: Maverick (2022)",
    image: firstMovie,
    category: 'Боевики'
  },
  {
    id: 6,
    rating: 68,
    name: "Fantastic Beasts: The Secrets of Dumbledore (2022)",
    image: secondMovie,
    category: 'Комедии'
  },
  {
    id: 7,
    rating: 83,
    name: "Top Gun: Maverick (2022)",
    image: firstMovie,
    category: 'Мелодрамы'
  }
];
