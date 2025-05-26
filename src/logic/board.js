import { useState } from "react";
import { WINNER_COMBOS, TURNS } from "../constants.js";
import confetti from "canvas-confetti";

export const logic = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); //null sin ganador y false es un empate

  const checkEndGame = (newBoard) => {
    //si no hay espacios vacios en el tablero
    return newBoard.every((square) => square !== null);
  };

  const checkWinner = (boardToCheck) => {
    //vrevisamos todas las combinaciones ganadoras
    // para ver si gano x u o
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    //si no hay ganador
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    //No actualizamos esta posicion si ya tiene algo
    if (board[index] || winner) return;

    //creo un nuevo array para no mutar el original
    const newBoard = [...board];
    //actualizo el nuevo array en su posicion
    newBoard[index] = turn;
    //actualizo el estado
    setBoard(newBoard);

    //cambio el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //verifico si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setTimeout(() => {
        confetti();
      }, 800);
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // empate
    }
  };

  return { 
    checkWinner,
    resetGame, 
    updateBoard, 
    checkEndGame,
    turn,
    winner,
    board,
  };
};
