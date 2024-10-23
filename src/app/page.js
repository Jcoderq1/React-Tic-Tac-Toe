"use client";
import { useState } from "react";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function onSquareClick(idx) {
    if (squares[idx] || calculateWinner(squares)) return; // this checks weather a value has already been set for one of the squares and ensures
    // the user cant toggle the values back and forth
    const newSquares = squares.slice(); // makes a copy of the squares array
    newSquares[idx] = xIsNext ? "X" : "O"; // if XisNext is true set value to x otherwise set value to O
    setXIsNext(!xIsNext); // toggles between true and false for xIsNext
    setSquares(newSquares); // replaces the squares array with the new Squares array we just created by using squares.slice()
  }

  const winner = calculateWinner(squares);
  return (
    <>
      {winner ? (
        <p>Winner is:{winner}</p>
      ) : (
        <p>Next Player: {xIsNext ? "X" : "O"}</p> // displays which player is next using the xIsNext function we toggle between true and false after
        // every click of a square
      )}

      <div className="board-row">
        <Square value={squares[0]} onClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onClick={() => onSquareClick(8)} />
      </div>
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    // these numbers represent the indicies of each square that we want to check the value for we want to make sure that each line has either 3 x or o
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // here we are grabbing the indicies and storing them inside
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default function Game() {
  return (
    <div>
      <Board />
    </div>
  );
}
