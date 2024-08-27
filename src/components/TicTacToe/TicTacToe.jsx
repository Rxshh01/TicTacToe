import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle from "../assests/circle.png";
import cross from "../assests/cross.png";
let data = ["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  const [lock, setLock] = useState(false);
  const [count, setCount] = useState(0);

  function resetGame() {
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    setLock(false);
  }
  function checkWin(data) {
    const winningCombinations = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal from top-left to bottom-right
      [2, 4, 6], // Diagonal from top-right to bottom-left
    ];
    for (let x of winningCombinations) {
      const [a, b, c] = x;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return;
  }
  function toggle(num) {
    if (lock || data[num] !== "") {
      return 0;
    }
    if (count % 2 === 0) {
      data[num] = circle;
      setCount((pre) => pre + 1);
      const winner = checkWin(data);
      if (winner) {
        if (winner === circle) {
          alert("circle is the winner");
        } else {
          alert("cross is the winner");
        }
        setLock(true);
      }
    } else {
      data[num] = cross;
      setCount((pre) => pre + 1);
      const winner = checkWin(data);
      if (winner) {
        if (winner === circle) {
          alert("circle is the winner");
        } else {
          alert("cross is the winner");
        }
        setLock(true);
      }
    }
  }

  return (
    <div>
      <div className="container">
        <h1 className="title">
          Tic Tac Game in <span>React</span>
        </h1>
        <div className="board">
          <div className="row1">
            {data.slice(0, 3).map((value, index) => {
              return (
                <div
                  key={index}
                  className="boxes"
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  {value && <img src={value} alt="icon" />}
                </div>
              );
            })}
          </div>
          <div className="row2">
            {data.slice(3, 6).map((value, index) => {
              return (
                <div
                  key={index}
                  className="boxes"
                  onClick={() => {
                    toggle(index + 3);
                  }}
                >
                  {value && <img src={value} alt="icon" />}
                </div>
              );
            })}
          </div>
          <div className="row3">
            {data.slice(6, 9).map((value, index) => {
              return (
                <div
                  key={index}
                  className="boxes"
                  onClick={() => {
                    toggle(index + 6);
                  }}
                >
                  {value && <img src={value} alt="icon" />}
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            resetGame();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
