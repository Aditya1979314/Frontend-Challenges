import { useState, useRef, useEffect, useCallback } from "react";
import Box from "./Components/Box.jsx";
import Modal from "./Components/Modal.jsx";

function App() {
  const [xval, setxval] = useState([]);
  const [oval, setoval] = useState([]);
  const [winner, setWinner] = useState("");
  const solval = useRef();
  solval.current = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  // [1,2,3] -> [3,4,7,8]
  // if all the values of solarr[i] present in xval or oval , return winner
  // iterate the solarr , for solarr[i].

  const checkValPresentOrNot = useCallback((currGame, solArr, player) => {
    for (let i = 0; i < solArr.length; i++) {
      let [first, second, third] = solArr[i];
      if (
        currGame.includes(first) &&
        currGame.includes(second) &&
        currGame.includes(third)
      ) {
        setWinner(player);
        break;
      }
    }
  });

  const gameArrayForX = useCallback(
    (val) => {
      setxval((prev) => [...prev, val]);
    },
    [setxval],
  );

  const gameArrayForO = useCallback(
    (val) => {
      setoval((prev) => [...prev, val]);
    },
    [setoval],
  );

  useEffect(() => {
    checkValPresentOrNot(xval, solval.current, "X");
    console.log("xval", xval);
    console.log("xval useffect");
  }, [xval]);

  useEffect(() => {
    checkValPresentOrNot(oval, solval.current, "O");
    console.log("oval", oval);
    console.log("oval useEffect");
  }, [oval]);

  return (
    <>
      {winner && <Modal winner={winner} />}

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-3 gap-2">
          <Box
            num={1}
            gameArrayForO={gameArrayForO}
            gameArrayForX={gameArrayForX}
          />
          <Box
            num={2}
            gameArrayForO={gameArrayForO}
            gameArrayForX={gameArrayForX}
          />
          <Box
            num={3}
            gameArrayForO={gameArrayForO}
            gameArrayForX={gameArrayForX}
          />

          <Box
            num={4}
            gameArrayForO={gameArrayForO}
            gameArrayForX={gameArrayForX}
          />
          <Box
            num={5}
            gameArrayForO={gameArrayForO}
            gameArrayForX={gameArrayForX}
          />
          <Box
            num={6}
            gameArrayForO={gameArrayForO}
            gameArrayForX={gameArrayForX}
          />

          <Box
            num={7}
            gameArrayForO={gameArrayForO}
            gameArrayForX={gameArrayForX}
          />
          <Box
            num={8}
            gameArrayForO={gameArrayForO}
            gameArrayForX={gameArrayForX}
          />
          <Box
            num={9}
            gameArrayForO={gameArrayForO}
            gameArrayForX={gameArrayForX}
          />
        </div>
      </div>
    </>
  );
}

export default App;
