import React, {useState} from "react";
import "./assets/css/App.css";
import Tabuleiro from "./components/Tabuleiro";
import Placar from "./components/Placar";

function App() {
  const [jogadorAtual, setJogadorAtual] = useState("");
  const [turno, setTurno] = useState(1);
  const [placarJogadorX, setPlacarJogadorX] = useState(0);
  const [placarJogadorO, setPlacarJogadorO] = useState(0);
  const [placarEmpates, setPlacarEmpates] = useState(0);
  const [placarTotalPartidas, setPlacarTotalPartidas] = useState(0);

  return (
    <>
      <h1>Jogo da velha</h1>
        <Tabuleiro
            setJogadorAtual={setJogadorAtual}
            setTurno={setTurno}
            turno={turno}
            setPlacarJogadorX={setPlacarJogadorX}
            placarJogadorX={placarJogadorX}
            setPlacarJogadorO={setPlacarJogadorO}
            placarJogadorO={placarJogadorO}
            setPlacarEmpates={setPlacarEmpates}
            placarEmpates={placarEmpates}
            setPlacarTotalPartidas={setPlacarTotalPartidas}
            placarTotalPartidas={placarTotalPartidas}
        />
        <Placar
            jogadorAtual={jogadorAtual}
            turno={turno}
            placarJogadorX={placarJogadorX}
            placarJogadorO={placarJogadorO}
            placarEmpates={placarEmpates}
            placarTotalPartidas={placarTotalPartidas}
        />
        <h4>Por José Gomes</h4>
    </>
  );
}

export default App;
