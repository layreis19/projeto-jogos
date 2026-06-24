import {Link} from "react-router-dom"


export default function Homepage(){
    return <div>
        <h6>As minhas Funcionalidades</h6>
        <Link to="/events">Events</Link>
<br />
        <Link to ="/PlayGamesPage">PlayGames</Link>
<br/>
      <Link to = "/JogosPage">Lista de Jogos</Link>

<br />
       <Link to="/DetalhesPage">Detalhes</Link>
<br />
       <Link to="/"></Link>

    </div>
}