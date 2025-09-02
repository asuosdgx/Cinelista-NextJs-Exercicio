import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { getTop } from "@/lib/api/tmdb";

export const dynamic = 'force-static'


export default async function TopFilmes() {
  const filmes = await getTop();

  return (
    <>
      <Title title="Top Filmes" />
      <Grid filmes={filmes} />
    </>
  );
}