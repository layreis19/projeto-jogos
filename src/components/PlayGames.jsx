import { useState } from "react";
import TabButton from "./TabButton";
import "../components/tabButton.css";
import { jogos } from "../Data/JogoData";

import "./PlayGames.css";


// Lista de géneros 
const generos = [
  { nome: "RPG", icone: "⚔️", slug: "rpg" },
  { nome: "Ação", icone: "💥", slug: "action" },
  { nome: "Desporto", icone: "⚽", slug: "sports" },
];

function playGames() {
  const [subjectIn, setSubjectIn] = useState(null);
  const [erro, setErro] = useState(false);
  const [listaJogos, setListaJogos] = useState([]);

  function printJogo(generoSlug) {
    setSubjectIn(generoSlug);

    try {
      if (!jogos) {
        throw new Error("Erro ao carregar jogos");
      }

      // Procura a lista de jogos usando o slug do género 
      const jogosGenero = jogos[generoSlug] || [];

      setListaJogos(jogosGenero);
      setErro(false);
    } catch (error) {
      setErro(true);
      setListaJogos([]);
    }
  }

  return (
    <div className="jogos-container">
      <h3>Catálogo por Género</h3>

      <menu className="jogos-tabs">
        {generos.map((genero) => (
          <TabButton
            key={genero.slug}
            isActive={subjectIn === genero.slug}
            clickFunction={() => printJogo(genero.slug)}
          >
            <span className="bandeira">{genero.icone}</span>
            {genero.nome}
          </TabButton>
        ))}
      </menu>

      <div className="jogos-conteudo">
        {erro && (
          <p className="jogos-mensagem jogos-mensagem-erro">
            Não foi possível carregar os jogos.
          </p>
        )}

        {!erro && subjectIn && listaJogos.length === 0 && (
          <p className="jogos-mensagem">
            Sem jogos disponíveis para este género.
          </p>
        )}

        {!erro && subjectIn && listaJogos.length > 0 && (
          <ul className="jogos-lista">
            {listaJogos.map((jogo) => (
              <li key={jogo.id} className="jogos-item">
                <span className="jogos-item-data">
                  {jogo.dataLancamento}
                </span>

                <span className="jogos-item-nome">
                  {jogo.nome}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default playGames;


