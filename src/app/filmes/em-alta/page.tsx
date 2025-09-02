import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { getNowPlaying } from "@/lib/api/tmdb";

export default async function EmAlta() {
  const filmes = await getNowPlaying();

  return (
   <>
      <Title title="Filmes em alta"/> 
      <Grid filmes={filmes} />
   </>
  );
}
