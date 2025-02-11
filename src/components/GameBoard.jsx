import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function GameBoard({onSelectSquare}) {

  const[gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map(ineerArray => [...innerArray])];
      updatedBoard[rowIndex[colIndex]] = 'X';
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol>
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
