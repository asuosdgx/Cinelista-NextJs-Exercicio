

import { Filme } from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
    filme : Filme
}

export default function Card({filme}: Props){
        const { id, title, overview, poster_path, vote_average } = filme;
        const resume = overview.length >= 256 ? `${overview.substring(0, 200)}...` : overview;
        const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`;
        return (
            <Link href={`/filmes/${id}`} className={styles.card__link}>
                <div key={id} className={styles.card}>
                    <Image
                        className={styles.card__poster}
                        src={imgUrl}
                        alt={`Poster do filme ${title}`}
                        width={300}
                        height={450}
                    />
                    <div>
                        <h3 className={styles.card__title}>{title}</h3>
                        <p className={styles.card__text}>{resume}</p>
                        <p  className={styles.card__text}>Nota: {vote_average}</p>
                    </div>
                </div>
            </Link>
        );
}