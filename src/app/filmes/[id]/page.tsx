
import style from "./PageDetails.module.css";
import Link from "next/link";
import Image from "next/image";
import { getMovieDetails } from "@/lib/api/tmdb";





export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const details = await getMovieDetails(Number(id));
    if (!details) {
        return;
    }
    return {
        title: details.title,
        description: details.overview,
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const details = await getMovieDetails(Number(id));
    return (
        <section className={style.detalhes}>
            <Link href='/'>Voltar</Link>
            {details ? (
                (() => {
                    const { title, overview, poster_path } = details;
                    const imgUrl = poster_path ? `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}` : '/placeholder.jpg';
                    return (
                        <div>
                            <figure>
                                <Image src={imgUrl} alt={`Poster do filme ${title}`} width={300} height={450} />
                            </figure>
                            <h2>{title}</h2>
                            <p>{overview}</p>
                        </div>
                    );
                })()
            ) : (
                <p>Filme não encontrado</p>
            )}
        </section>
    );
}