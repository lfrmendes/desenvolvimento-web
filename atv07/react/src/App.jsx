import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const post = {
    titulo: "Descobrindo as Praias do Nordeste",
    autor: "Luiz Felipe",
    data: "16 de agosto de 2006",
    conteudo: [
      "O Nordeste brasileiro abriga algumas das praias mais impressionantes do país...",
      "De destinos famosos como Porto de Galinhas até vilas mais tranquilas...",
    ],
    imagem: "/images.jpg",
    legenda: "Visitantes relaxando em redes sobre as águas cristalinas.",
  };

  const relacionados = [
    "Conhecendo as Dunas de Natal",
    "Aventuras em Jericoacoara",
    "Guia de Porto de Galinhas",
    "Canoa Quebrada",
  ];

  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Article post={post} />
      </main>

      <Sidebar posts={relacionados} />

      <Footer />
    </>
  );
}

export default App;
