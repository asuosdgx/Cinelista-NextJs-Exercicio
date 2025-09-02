import Title from "./components/Title";
import Grid from "./components/Grid";
import {filmes} from "@/lib/filmes"
import { getPopularMovies } from "@/lib/api/tmdb";


export default async function Home() {
  const filmes = await getPopularMovies();
  return (
    <div>
      <Title title={"Filmes em Destaque"}/>
      <Grid filmes={filmes}/>
      
    </div>
  );
}
