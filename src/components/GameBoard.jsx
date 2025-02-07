const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function GameBoard() {

  return (
    <ol>
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
