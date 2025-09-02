
import style from "./PageDetails.module.css";
import Link from "next/link";
import { getMovieDetails } from "@/lib/api/tmdb";


type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const id = Number(params.id);
    const details = await getMovieDetails(id);

    return (
        <section className={style.detalhes}>

            <Link href='/'>Voltar</Link>
            <h1>Detalhes do Filme: {id}</h1>
            {details ? (
                (() => {
                    const { title, overview, poster_path } = details;
                    const imgUrl = poster_path ? `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}` : '/placeholder.jpg'; 
                    return (
                        <div>
                            <h2>{title}</h2>
                            <p>{overview}</p>
                            <figure>
                                <img src={imgUrl} alt={`Poster do filme ${title}`} />
                            </figure>
                        </div>
                    );
                })()
            ) : (
                <p>Filme não encontrado</p>
            )}
        </section>
    );
}

