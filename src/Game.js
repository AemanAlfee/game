import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

export default function Game() {
  const tournament = useSelector((state) => state && state.tournament);
  const turn = useSelector((state) => state && state.turn);
  console.log("======>", tournament, turn);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(2);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [gameCount, setGameCount] = useState(0);
  // Starts new game
  const initBoard = () => {
    // Create a blank 6x7 matrix
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) {
        row.push(null);
      }
      board.push(row);
    }
    setCurrentPlayer(player1);
    setBoard(board);
    setGameOver(false);
    setMessage("");
  };

  const togglePlayer = () => {
    const player = currentPlayer === player1 ? player2 : player1;
    setCurrentPlayer(player);
  };

  const Row = ({ row, play }) => {
    return (
      <tr>
        {row.map((cell, i) => (
          <Cell key={i} value={cell} columnIndex={i} play={play} />
        ))}
      </tr>
    );
  };

  const Cell = ({ value, columnIndex, play }) => {
    let color = "white";
    if (value === 1) {
      color = "red";
    } else if (value === 2) {
      color = "yellow";
    }

    return (
      <td>
        <div
          className="cell"
          onClick={() => {
            play(columnIndex);
          }}
        >
          <div className={color}></div>
        </div>
      </td>
    );
  };

  const play = (c) => {
    if (gameOver && gameCount === 5) {
      const winner =
        player1Wins > player2Wins ? "Player1 wins" : "Player2 wins";
      setMessage(winner);
      setGameCount(0);
    } else if (!gameOver) {
      // Place piece on board
      let boardGame = board;
      for (let r = 5; r >= 0; r--) {
        if (!boardGame[r][c]) {
          boardGame[r][c] = currentPlayer;
          break;
        }
      }
      // Check status of board
      let result = checkAll(board);
      if (result === player1) {
        setBoard(board);
        setGameOver(true);
        setGameCount(gameCount + 1);
        setPlayer1Wins(player1Wins + 1);
        setMessage("Player 1 (red) wins!");
      } else if (result === player2) {
        setBoard(board);
        setGameOver(true);
        setGameCount(gameCount + 1);
        setPlayer2Wins(player2Wins + 1);
        setMessage("Player 2 (yellow) wins!");
      } else if (result === "draw") {
        setBoard(board);
        setGameOver(true);
        setGameCount(gameCount + 1);
        setMessage("Draw game.");
      } else {
        setBoard(board);
        togglePlayer();
      }
    }
  };

  const checkVertical = (board) => {
    // Check only if row is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]
          ) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkHorizontal = (board) => {
    // Check only if column is 3 or less
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r][c + 1] &&
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDiagonalRight = (board) => {
    // Check only if row is 3 or greater AND column is 3 or less
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDiagonalLeft = (board) => {
    // Check only if row is 3 or greater AND column is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDraw = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return "draw";
  };

  const checkAll = (board) => {
    return (
      checkVertical(board) ||
      checkDiagonalRight(board) ||
      checkDiagonalLeft(board) ||
      checkHorizontal(board) ||
      checkDraw(board)
    );
  };

  useEffect(() => {
    initBoard();
  }, []);
  return (
    <div className="App">
      <div className="app-background">
        <h1>Hello CodeSandbox</h1>
        <h2>Edit to see some magic happen!</h2>
        <div>
          <div
            className="button"
            onClick={() => {
              initBoard();
            }}
          >
            New Game
          </div>

          <table>
            <thead></thead>
            <tbody>
              {board.map((row, i) => (
                <Row key={i} row={row} play={play} />
              ))}
            </tbody>
          </table>

          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
}
