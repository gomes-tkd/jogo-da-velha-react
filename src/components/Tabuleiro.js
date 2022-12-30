import React from 'react';
import styles from '../assets/css/tabuleiro.module.css';

const Tabuleiro = ({
                       setJogadorAtual, setTurno, turno,
                       placarJogadorX, setPlacarJogadorX,
                       placarJogadorO, setPlacarJogadorO,
                       placarEmpates, setPlacarEmpates,
                       placarTotalPartidas, setPlacarTotalPartidas}) => {

    function handleJogadorAtual(e) {
        if (turno < 9) {
            if (turno % 2 === 0) {
                e.currentTarget.innerHTML = "X";
                setJogadorAtual("O");
            } else {
                e.currentTarget.innerHTML = "O";
                setJogadorAtual("X");
            }

            setTurno(turno + 1);
        } else {
            alert("VELHA! Número máximo de jogadas permitidas atingido!");
            const td = document.querySelectorAll("td");
            td.forEach(cell => cell.innerHTML = " ");
            setPlacarEmpates(placarEmpates + 1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);
            setTurno(1);
        }
        handleCondicoesVitoria();
    }

    function handleCondicoesVitoria() {
        const tabuleiro = document.querySelector("tbody").rows;
        const td = document.querySelectorAll("td");

        if (tabuleiro[0].cells[0].innerHTML === "X" && tabuleiro[0].cells[1].innerHTML === "X" && tabuleiro[0].cells[2].innerHTML === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[1].cells[0].innerHTML === "X" && tabuleiro[1].cells[1].innerHTML === "X" && tabuleiro[1].cells[2].innerHTML === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[2].cells[0].innerHTML === "X" && tabuleiro[2].cells[1].innerHTML === "X" && tabuleiro[2].cells[2].innerHTML === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[0].innerHTML === "X" && tabuleiro[1].cells[0].innerHTML === "X" && tabuleiro[2].cells[0].innerHTML === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[1].innerHTML === "X" && tabuleiro[1].cells[1].innerHTML === "X" && tabuleiro[2].cells[1].innerHTML === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[2].innerHTML === "X" && tabuleiro[1].cells[2].innerHTML === "X" && tabuleiro[2].cells[2].innerHTML === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[0].innerHTML === "X" && tabuleiro[1].cells[1].innerHTML === "X" && tabuleiro[2].cells[2].innerHTML === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[2].innerHTML === "X" && tabuleiro[1].cells[1].innerHTML === "X" && tabuleiro[2].cells[0].innerHTML === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        }

        else if (tabuleiro[0].cells[0].innerHTML === "O" && tabuleiro[0].cells[1].innerHTML === "O" && tabuleiro[0].cells[2].innerHTML === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);


        } else if (tabuleiro[1].cells[0].innerHTML === "O" && tabuleiro[1].cells[1].innerHTML === "O" && tabuleiro[1].cells[2].innerHTML === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[2].cells[0].innerHTML === "O" && tabuleiro[2].cells[1].innerHTML === "O" && tabuleiro[2].cells[2].innerHTML === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[0].innerHTML === "O" && tabuleiro[1].cells[0].innerHTML === "O" && tabuleiro[2].cells[0].innerHTML === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[1].innerHTML === "O" && tabuleiro[1].cells[1].innerHTML === "O" && tabuleiro[2].cells[1].innerHTML === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[2].innerHTML === "O" && tabuleiro[1].cells[2].innerHTML === "O" && tabuleiro[2].cells[2].innerHTML === "O") {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[0].innerHTML === "O" && tabuleiro[1].cells[1].innerHTML === "O" && tabuleiro[2].cells[2].innerHTML === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        } else if (tabuleiro[0].cells[2].innerHTML === "O" && tabuleiro[1].cells[1].innerHTML === "O" && tabuleiro[2].cells[0].innerHTML === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            td.forEach(cell => cell.innerHTML = " ");
            setTurno(1);
            setPlacarTotalPartidas(placarTotalPartidas + 1);

        }
    }

    return (
        <table className={styles.container}>
            <tbody>
            <tr>
                <td
                    onClick={handleJogadorAtual}
                    className={styles.horizontal}
                >
                </td>
                <td
                    onClick={handleJogadorAtual}
                    className={`${styles.vertical} ${styles.horizontal}`}
                >
                </td>
                <td
                    onClick={handleJogadorAtual}
                    className={styles.horizontal}
                >
                </td>
            </tr>
            <tr>
                <td
                    onClick={handleJogadorAtual}
                    className={styles.horizontal}
                >
                </td>
                <td
                    onClick={handleJogadorAtual}
                    className={`${styles.vertical} ${styles.horizontal}`}
                >
                </td>
                <td
                    onClick={handleJogadorAtual}
                    className={styles.horizontal}
                >
                </td>
            </tr>
            <tr>
                <td onClick={handleJogadorAtual}></td>
                <td
                    onClick={handleJogadorAtual}
                    className={styles.vertical}
                >
                </td>
                <td onClick={handleJogadorAtual}></td>
            </tr>
            </tbody>
        </table>
    );
};

export default Tabuleiro;