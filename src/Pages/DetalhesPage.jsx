import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "../components/DetalhesPage.css"

export default function JogoDetalhes() {

  const { id } = useParams()
  const [jogo, setJogo] = useState()

  useEffect(() => {
    fetch(`https://www.freetogame.com/api/game?id=${id}`)
      .then((response) => response.json())
      .then((resData) => setJogo(resData))
  })

 return (
  <div className="detalhes-container">
    <h4>Detalhes do Jogo</h4>
    {!jogo && <p className="detalhes-estado">Ups Não temos detalhes disponíveis</p>}
    {jogo && (
      <div className="detalhes-card">
        <img src={jogo.thumbnail} alt={jogo.title} />
        <div className="detalhes-info">
          <Link to="/jogos" className="detalhes-voltar">← Voltar</Link>
          <ul>
            <li>{jogo.title}</li>
            <li>{jogo.short_description}</li>
            <li>{jogo.genre}</li>
            <li>{jogo.platform}</li>
            <li>{jogo.publisher}</li>
            <li>{jogo.developer}</li>
            <li>{jogo.release_date}</li>
          </ul>
          <a href={jogo.game_url} target="_blank" rel="noreferrer" className="detalhes-btn">
            Jogar Grátis
          </a>
        </div>
      </div>
    )}
  </div>
)
}