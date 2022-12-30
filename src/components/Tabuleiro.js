import React, {useState} from 'react';
import styles from '../assets/css/tabuleiro.module.css';

const Tabuleiro = ({
                       setJogadorAtual, setTurno, turno,
                       placarJogadorX, setPlacarJogadorX,
                       placarJogadorO, setPlacarJogadorO,
                       placarEmpates, setPlacarEmpates,
                       placarTotalPartidas, setPlacarTotalPartidas}) => {


    const [board, setBoard] = useState([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]);

    function handleJogadorAtual(e, rowIndex, cellIndex) {
        let copiaBoard = [...board];

        if (turno < 9) {
            if (turno % 2 === 0) {
                if (copiaBoard[rowIndex][cellIndex] === " ") {
                    copiaBoard[rowIndex][cellIndex] = "X";
                    setJogadorAtual("O");
                } else {
                    alert("Casa já ocupada!");
                    setJogadorAtual("X")
                    turno--;
                }

            } else {
                if (copiaBoard[rowIndex][cellIndex] === " ") {
                    copiaBoard[rowIndex][cellIndex] = "O";
                    setJogadorAtual("X");
                } else {
                    alert("Casa já ocupada!");
                    setJogadorAtual("O");
                    turno--;
                }
                copiaBoard[rowIndex][cellIndex] = "O";
                setJogadorAtual("X");
            }
            setBoard(copiaBoard);
            setTurno(turno + 1);
        } else {
            alert("VELHA! Número máximo de jogadas permitidas atingido!");
            setPlacarEmpates(placarEmpates + 1);
            handleClearBoard();
        }
        handleCondicoesVitoria();
    }

    function handleCondicoesVitoria() {
        if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            handleClearBoard();
        } else if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            handleClearBoard();
        } else if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            handleClearBoard();
        } else if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            handleClearBoard();
        } else if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            handleClearBoard();
        } else if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            handleClearBoard();
        } else if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            handleClearBoard();
        } else if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            handleClearBoard();
        } else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X" ) {
            alert("Jogador X venceu!");
            setPlacarJogadorX(placarJogadorX + 1);
            handleClearBoard();
        }

        else if (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            handleClearBoard();
        } else if (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            handleClearBoard();
        } else if (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            handleClearBoard();
        } else if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            handleClearBoard();
        } else if (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            handleClearBoard();
        } else if (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            handleClearBoard();
        } else if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            handleClearBoard();
        } else if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O" ) {
            alert("Jogador O venceu!");
            setPlacarJogadorO(placarJogadorO + 1);
            handleClearBoard();
        }
    }

    function handleClearBoard() {
        setBoard([
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ]);
        setTurno(1);
        setPlacarTotalPartidas(placarTotalPartidas + 1);
        setJogadorAtual("O");
    }

    return (
        <>
            {/*
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
            </table>*/}
            <table className={styles.container}>
                <tbody>
                {
                    board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    className={styles.square}
                                    onClick={() => handleJogadorAtual(cell, rowIndex, cellIndex)}
                                    key={cellIndex}
                                >
                                    {cell}
                                </td>))}
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>

    );
};

export default Tabuleiro;