import Title from "./components/Title";
import Grid from "./components/Grid";
import {filmes} from "@/lib/filmes"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Title title={"Filmes em Destaque"}/>
      <Grid filmes={filmes}/>
      
    </div>
  );
}
