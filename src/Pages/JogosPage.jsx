import { useEffect, useState } from "react"
import JogoCard from "../components/JogoCard"
import "../components/JogoPage.css"

export default function JogosPage() {

  const [jogos, setJogos] = useState();

  useEffect(() => {
    fetch('https://www.freetogame.com/api/games')
      .then((response) => response.json())
      .then((resData) => setJogos(resData))
  })

  return (
    <div className="jogos-page">
      <h4>Jogos</h4>
      {!jogos || (jogos.length == 0 && <p>Ups Não temos jogos disponíveis</p>)}
      {jogos && jogos.length > 0 && (
        <ul className="jogos-grid">
          {jogos.map((item, index) => (
            <JogoCard
              key={index}
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              genre={item.genre}
            />
          ))}
        </ul>
      )}
    </div>
  )
}