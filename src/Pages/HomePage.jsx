import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./HomePage.css"

export default function Homepage() {

  const [jogoDestaque, setJogoDestaque] = useState()

  useEffect(() => {
    fetch('https://www.freetogame.com/api/game?id=452')
      .then((response) => response.json())
      .then((resData) => setJogoDestaque(resData))
  })

  return (
    <div className="home-page">

      
      <section className="home-hero">
        <h1>GameVerse</h1>
        <p>Descobre os melhores jogos gratuitos. Explora por género, vê detalhes e encontra o teu próximo jogo favorito.</p>
        <Link to="/jogos" className="home-btn">Ver Jogos</Link>
      </section>

     
      <section className="home-destaque">
        <h2>Jogo em Destaque</h2>
        {!jogoDestaque && <p className="home-estado">A carregar...</p>}
        {jogoDestaque && (
          <div className="home-destaque-card">
            <img src={jogoDestaque.thumbnail} alt={jogoDestaque.title} />
            <div className="home-destaque-info">
              <h3>{jogoDestaque.title}</h3>
              <p>{jogoDestaque.short_description}</p>
              <span className="home-genero">{jogoDestaque.genre}</span>
              <Link to={`/jogo/${jogoDestaque.id}`} className="home-btn">
                Ver Detalhes
              </Link>
            </div>
          </div>
        )}
      </section>

      
      <section className="home-nav">
        <Link to="/jogos" className="home-nav-card">
          <span>🎮</span>
          <p>Lista de Jogos</p>
        </Link>
        <Link to="/playgames" className="home-nav-card">
          <span>⚔️</span>
          <p>Por Género</p>
        </Link>
      </section>

    </div>
  )
}