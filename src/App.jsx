import { useState, useEffect } from 'react';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  useEffect(() => {
    checkWinner(board);
  }, [board]);

  const checkWinner = (squares) => {
    const lines = [
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
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
        setWinningLine(lines[i]);
        return;
      }
    }
    if (!squares.includes(null)) {
      setWinner('Draw');
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setWinningLine([]);
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">Tic Tac Toe</h1>
        <div className="status">
          {winner ? (
            winner === 'Draw' ? (
              <span className="draw">It's a Draw!</span>
            ) : (
              <span className="winner-text">Winner: <span className={winner}>{winner}</span></span>
            )
          ) : (
            <span>Next Player: <span className={xIsNext ? 'X' : 'O'}>{xIsNext ? 'X' : 'O'}</span></span>
          )}
        </div>
      </div>

      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell ? 'filled' : ''} ${winningLine.includes(index) ? 'winning-cell' : ''}`}
            onClick={() => handleClick(index)}
          >
            {cell && (
              <span className={`mark ${cell}`}>
                {cell}
              </span>
            )}
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Restart Game
      </button>

      {/* Decorative animated background elements */}
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
    </div>
  );
}

export default App;
