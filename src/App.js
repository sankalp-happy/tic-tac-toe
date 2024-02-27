import Board from './comp/Board';
import './App.css';
import { useState } from 'react';


function App() {
  var [board, setBoard] = useState(Array(9).fill(null));
  var [xIsNext, setXIsNext] = useState(true);
  const handleClick = (e) => {
    console.log(e.target.id);
    let newA = board;
    newA[e.target.id]?(newA[e.target.id] = xIsNext?'X':'O'):alert("hello");
    setBoard(newA);
    setXIsNext(!xIsNext);
    console.log(board);
    setTimeout(() => {checkWin(board)}, 200)
    
  }
  const checkWin = board => {
    const winPattern = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for (var i = 0; i < winPattern.length; i++) {
      let [a,b,c] = winPattern[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        let winTeam = xIsNext?"X":"0";
        gameOver(winTeam);
        return winTeam;
      }
    }
    return null;
  }

  const gameOver = (team) => {
    team?alert(team + " Won"):alert("Game Draw")
    setBoard([Array(9).fill(null)]);
    setXIsNext(true);
  }

  return (
    <div className='body' >
      <h1>Tic Tac Toe</h1>
      <Board onClick = {handleClick} content = {board}/>
    </div>
  );
}

export default App;
