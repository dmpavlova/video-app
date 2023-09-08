import { Container } from "../styles/components/Container.styled";
import { Image } from "../styles/components/Image.styled";
import { Name } from "../styles/components/Name.styled";
import { Rating } from "../styles/components/Rating.styled";
import { TotalRating } from "../styles/components/TotalRating.styled";
import { Plus } from "../styles/components/Plus.styled";
import plus from '..//pic/plus.svg'
import { useState } from "react";
import mov from "../pic/pic2.svg";
import Video from "./Video";


type MovieProps = {
  id: number;
  rating: number;
  image: string;
  name: string;
};

export function Movie({ id, image, rating, name }: MovieProps): JSX.Element {
  /* const [poster, setPoster] = useState<number|null>(null); */
  const [poster, setPoster] = useState(image);

  return (
    <Container onMouseEnter={()=>setPoster(mov)} onMouseLeave={()=>setPoster(image)} key={id}>
      <Image src={poster} alt="movie" />
     {/*  <Video/> */}
      <button><Plus src={plus}/></button>
      <Rating style={{color: rating>50? 'green' : 'red'}}>
        {rating}
        <TotalRating>/100</TotalRating>
      </Rating>
      <Name>{name}</Name>
    </Container>
  );
}
