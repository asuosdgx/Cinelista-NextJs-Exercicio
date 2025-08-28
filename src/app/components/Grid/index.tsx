import { Filme } from "@/types/types";
import Card from "../Card";
import styles from "./Grid.module.css";

type Props = {
    filmes: Filme[]
}

export default function Grid({filmes} : Props) {
  return (
    <section className={styles.grid}>
      {filmes.map((filme) => <Card key={filme.id} filme={filme}/>)} 
    </section>
  );
}