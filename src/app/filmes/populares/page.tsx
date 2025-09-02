import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { getNowPop } from "@/lib/api/tmdb";

export default async function Populares() {
  const filmes = await getNowPop();
  return (
   <>
      <Title title="Filmes Populares"/> 
      <Grid filmes={filmes} />
      
   </>
  );
}