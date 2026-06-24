import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function JogosPage(){
 
    const [jogos, setJogos] = useState();
 
    useEffect(() =>{
        fetch(' https://www.freetogame.com/api/games')
        .then((response) => response.json())
        .then((resData) => setJogos(resData))
        }
    )
   
    return (
        <div>
            <h4>Jogos</h4>
            {!jogos || (jogos.length == 0 && <p> Ups Não temos jogos disponíveis</p>)}
            {jogos && jogos.length > 0 && (
        <ul>
          {jogos.map((item, index) => (
            <li key={index}>
              
              <Link to={`/jogo/${item.id}`}>
                {item.title}
              </Link>, {item.genre}
            </li>
          ))}
        </ul>
        )}
    </div>
    )
}
