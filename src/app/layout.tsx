import type { Metadata } from "next";
import Header from "./components/Header";
import "@/styles/globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Cinelista",
  description: "No cinelista você pode encontrar os melhores filmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
