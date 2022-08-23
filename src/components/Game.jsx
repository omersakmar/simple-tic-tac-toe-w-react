import React from "react";
import { useState } from "react";
import seeTheWinner from "../helper";
import Board from "./Board";
import Message from "./Message";
import "./Game.css";
const initialState = new Array(9).fill(null);

const Game = () => {
  const [board, setBoard] = useState(initialState);
  const [startsWithX, setstartsWithX] = useState(true);

  const winner = seeTheWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    // If there's a winner, or if the target value is not null, then return
    if (winner || boardCopy[i]) return;
    // else, read the input based on whoever's turn it is
    boardCopy[i] = startsWithX ? "X" : "O";
    setBoard(boardCopy);
    setstartsWithX(!startsWithX);
  };

  return (
    <div className="game">
      <Board squares={board} onClick={handleClick} />
      <div className="message">
        <Message winner={winner} startsWithX={startsWithX} />
      </div>
    </div>
  );
};

export default Game;
