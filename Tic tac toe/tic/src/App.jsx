import { useState, useEffect } from "react";
import Box from "./Components/Box.jsx";
import Modal from "./Components/Modal.jsx";

const solval = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [next, setNext] = useState("X");
  const [winner, setWinner] = useState("");

  function checkValPresentOrNot(board, solArr) {
    for (let i = 0; i < solArr.length; i++) {
      let [first, second, third] = solArr[i];
      if (
        board[first] === "X" &&
        board[second] === "X" &&
        board[third] === "X"
      ) {
        setWinner("The winner is X");
        return;
      }

      if (
        board[first] === "O" &&
        board[second] === "O" &&
        board[third] === "O"
      ) {
        setWinner("The winner is O");
        return;
      }
    }

    if (!board.includes("")) {
      setWinner("Game is a Draw");
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(""));
    setNext("X");
    setWinner("");
  }

  function onChangeHandler(e, num) {
    if (board[num] !== "") return;
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[num] = e.target.value;
      return newBoard;
    });
    setNext((val) => (val === "X" ? "O" : "X"));
  }

  useEffect(() => {
    checkValPresentOrNot(board, solval);
  }, [board]);

  return (
    <>
      {winner && <Modal winner={winner} resetGame={resetGame} />}

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-3 gap-2">
          {board.map((item, index) => (
            <Box
              key={index}
              num={index}
              setBoard={setBoard}
              board={board}
              setNext={setNext}
              next={next}
              onChangeHandler={onChangeHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
