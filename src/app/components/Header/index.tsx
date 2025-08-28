import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/"><h1 className={styles.header__logo}>Cinelista</h1></Link>
        <nav className={styles.header__nav}>
          <Link href="/">Home</Link>
          <Link href="/filmes/em-alta">Em Alta</Link>
          <Link href="/filmes/populares">Populares</Link>
          <Link href="/filmes/top-filmes">Top Filmes</Link>
        </nav>
      </div>
    </header>
  );
}
