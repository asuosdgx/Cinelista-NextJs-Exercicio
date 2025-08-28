import { Filme } from "@/types/types";
import styles from "./Card.module.css";

type Props = {
    filme : Filme
}

export default function Card({filme}: Props){
   const {id, title, description, image} = filme;
    return(
        <div key={id} className={styles.card}>
             <div >
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__text}>{description}</p>
            </div>
            <img className={styles.card__poster} src={image} alt={`Poster do filme ${title}`} width={300} height={200}/>
           
            
        </div>
    )
}