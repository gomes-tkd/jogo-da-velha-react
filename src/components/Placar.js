import React from 'react';
import "../assets/css/Placar.css";

const Placar = ({
                    jogadorAtual, turno, placarJogadorX,
                    placarJogadorO, placarEmpates, placarTotalPartidas }) => {

    return (
        <div>
            <p>Jogador atual: {jogadorAtual}</p>
            <p>Turno: {turno}</p>
            <h3>Placar</h3>
            <p>Jogador X: {placarJogadorX}</p>
            <p>Jogador O: {placarJogadorO}</p>
            <p>Empates: {placarEmpates}</p>
            <p>Total de partidas: {placarTotalPartidas}</p>
        </div>
    );
};

export default Placar;