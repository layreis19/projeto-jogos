import { Link } from "react-router-dom"

export default function JogoCard({ id, thumbnail, title, genre }) {
  return (
    <li className="jogo-card">
      <Link to={`/jogo/${id}`}>
        <img src={thumbnail} alt={title} />
        <div className="jogo-card-info">
          <span className="jogo-card-titulo">{title}</span>
          <span className="jogo-card-genero">{genre}</span>
        </div>
      </Link>
    </li>
  )
}