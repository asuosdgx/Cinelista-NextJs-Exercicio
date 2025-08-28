import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>&copy; 2025 Cinelista. Todos os direitos reservados.</p>
    </footer>
  );
}
