import { useState } from "react";

function PlayGames() {
  const [score, setScore] = useState(0); 

  return (
    <div>
      <h2>Área de Jogos</h2>
      <p>O componente de jogos foi carregado com sucesso!</p>
    </div>
  );
}

export default PlayGames;

